import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from '../pages/login';
import Register from '../pages/register';


export default function PublicRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="Register" element={<Register />} />
        </Routes>
  </Router>
)}
