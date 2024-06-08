import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import MultiStepForm from "./components/MultiStepForm";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<MultiStepForm />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
