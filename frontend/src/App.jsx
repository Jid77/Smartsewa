import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/signup/signup";
import Signin from "./components/signin/signin";
import Home from "./components/pages/User/home"; 

const ProtectedRoute =({ element, ...rest}) => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? element : <Navigate to="/signin" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
      </Routes>
    </Router>
  );
}

export default App;
