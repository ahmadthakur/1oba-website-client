import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const toast = useToast();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  const login = async (email, password) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/users/login`,
      { email, password }
    );
    const { token } = response.data;
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const register = async (formData) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/users/register`,
      formData
    );
    const { token } = response.data;
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have successfully logged out.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
