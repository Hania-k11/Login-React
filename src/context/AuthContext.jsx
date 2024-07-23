// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('Hania');
  const [password, setPassword] = useState('123');

  

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, username, setUsername, password, setPassword  }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
