import { Stack } from 'native-base';
import React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query';
import { UILoading } from '../components/UILoading';
import { AuthContextValue, AuthProviderConfig, AuthProviderProps } from './types';


export function initReactQueryAuth<
  User = unknown,
  Error = unknown,
  LoginCredentials = unknown,
  RegisterCredentials = unknown
>(config: AuthProviderConfig<User, Error>) {
  const AuthContext = React.createContext<AuthContextValue<
    User,
    Error,
    LoginCredentials,
    RegisterCredentials
  > | null>(null);

  AuthContext.displayName = 'AuthContext';

  const {
    loadUser,
    loginAuth,
    registerUser,
    logoutUser,
    key = 'auth-user',
    waitInitial = true,
    LoaderComponent = () => <UILoading/>,
    ErrorComponent = (error: any) => ( 
      <Stack>{ "aqui é o erro"}</Stack>
    ),
  } = config;

  function AuthProvider({ children }: AuthProviderProps): JSX.Element {
    const queryClient = useQueryClient();

    const {
      data: user,
      error,
      status,
      isLoading,
      isIdle,
      isSuccess,
      isError,
      refetch,
    } = useQuery<User, Error>({
      queryKey: key,
      queryFn: loadUser
    });

    const setUser = React.useCallback((data: User) =>
      queryClient.setQueryData(key, data),[queryClient]);

    const loginMutation = useMutation({
      mutationFn: loginAuth,
      onSuccess: user => {

      },
      onError: err => {

      }
    });

    const registerMutation = useMutation({
      mutationKey: key,
      mutationFn: registerUser,
      onSuccess: user => {
      },
      onError: err => {

      }
      
    });
  
  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.clear();
    },
  });

    const value = React.useMemo(
      () => ({
        user,
        error,
        refetchUser: refetch,
        login: loginMutation.mutateAsync,
        isLoggingIn: loginMutation.isLoading,
        logout: logoutMutation.mutateAsync,
        isLoggingOut: logoutMutation.isLoading,
        register: registerMutation.mutateAsync,
        isRegistering: registerMutation.isLoading,
      }),
      [
        user,
        error,
        refetch,
        loginMutation.mutateAsync,
        loginMutation.isLoading,
        logoutMutation.mutateAsync,
        logoutMutation.isLoading,
        registerMutation.mutateAsync,
        registerMutation.isLoading,
      ]
    );

    if (isSuccess || !waitInitial) {
      return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      );
    }

    if (isLoading || isIdle) {
      return <LoaderComponent />;
    }

    if (error) {

      queryClient.clear();
      return <ErrorComponent error={error} />;
    }

    return <Stack>Unhandled status: {status}</Stack>;
  }

  
  function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
      throw new Error(`useAuth must be used within an AuthProvider`);
    }
    return context;
  }
    return { AuthProvider, AuthConsumer: AuthContext.Consumer, useAuth };
}
