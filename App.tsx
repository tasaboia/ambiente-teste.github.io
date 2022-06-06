import React from 'react';
import { NativeBaseProvider } from 'native-base';
import PublicRoutes from './src/routes';
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from './src/services/auth/auth';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <AuthProvider>
            <PublicRoutes/>
          </AuthProvider>
        </NativeBaseProvider>
    </QueryClientProvider>
  );
}
