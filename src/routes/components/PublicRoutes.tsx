import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from '../../pages/forgotPassword/Index';
import Login from '../../pages/login/Index';
import Register from '../../pages/register';
import EmailNotification from '../../pages/register/components/EmailNotification';
import ResetPassword from '../../pages/resetPassword/Index';

export default function PublicRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/EmailNotification" element={<EmailNotification />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
  </Router>
)}
