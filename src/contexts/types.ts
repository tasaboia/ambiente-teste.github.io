import React from 'react'
import {
  UseMutateAsyncFunction,
  QueryObserverResult,
  RefetchOptions,
} from 'react-query'

export interface AuthContextValue<
    User = unknown,
    Error = unknown,
    LoginCredentials = unknown,
    RegisterCredentials = unknown
    > {
    user: User | undefined;
    login: UseMutateAsyncFunction<User, any, LoginCredentials>;
    logout: UseMutateAsyncFunction<any, any, void>;
    register: UseMutateAsyncFunction<User, any, RegisterCredentials>;
    isLoggingIn: boolean;
    isLoggingOut: boolean;
    isRegistering: boolean;
    refetchUser: (
    options?: RefetchOptions | undefined
    ) => Promise<QueryObserverResult<User, Error>>;
    error: Error | null;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}


export interface AuthProviderConfig<User = unknown, Error = unknown> {
    key?: string;
    loadUser: (data: any) => Promise<any>;
    loginAuth: (data: any) => Promise<any>;
    registerUser: (data: any) => Promise<any>;
    logoutUser: () => Promise<any>;
    waitInitial?: boolean;
    LoaderComponent?: () => JSX.Element;
    ErrorComponent?: ({ error }: { error: Error | null }) => JSX.Element;
  }
