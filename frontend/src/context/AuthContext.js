import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true); // New state to handle loading status

  useEffect(() => {
    // Check if there's any stored user information in localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedRole = localStorage.getItem('role');

    if (storedUser && storedRole) {
      setUser(storedUser);
      setRole(storedRole);
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        // Fetch role from the backend (or your authentication service)
        const response = await axios.post(
          'http://localhost:3001/api/authenticate', 
          {}, 
          { headers: { Authorization: token } }
        );
        
        // Save user and role in localStorage for persistence across refreshes
        const userData = response.data;
        localStorage.setItem('user', JSON.stringify(userData)); // Store user info
        localStorage.setItem('role', userData.role); // Store user role

        setUser(userData);
        setRole(userData.role);
      } else {
        setUser(null);
        setRole(null);
        localStorage.removeItem('user');
        localStorage.removeItem('role');
      }
      setLoading(false); // Set loading to false after checking auth status
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role }}>
      {!loading && children} {/* Only render children after loading is complete */}
    </AuthContext.Provider>
  );
};
