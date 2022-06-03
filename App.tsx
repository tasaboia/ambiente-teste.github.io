import React from 'react';
import { NativeBaseProvider } from 'native-base';
import PublicRoutes from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider>
        <PublicRoutes/>
    </NativeBaseProvider>
  );
}
