import React from 'react'
import { useAuth } from '../services/auth/auth';
import PublicRoutes from './components/PublicRoutes';
import PrivateRoutes from './components/PrivateRoutes';


export default function Routes() {
  const { user } = useAuth()
  return user ? <PrivateRoutes/> : <PublicRoutes/>
}
