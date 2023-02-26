import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Page404 from './pages/Page404';
import LandingPage from './pages/LandingPage';
import Category from './pages/Category';
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="*" element={<Page404 />} />
        
      </Routes>
    </BrowserRouter>
  );
}
