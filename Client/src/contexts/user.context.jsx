import { createContext, useState, useEffect, useMemo } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const { isAuthenticated, user } = useAuth0;
  const [currentUser, setCurrentUser] = useState(null);
  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  useEffect(() => {
    if (isAuthenticated) {
      axios.post('/api/user', { email: user.email })
        .then(({ data }) => {
          console.log(data);
          setCurrentUser(data);
        })
        .catch(err => {
          console.log('The error from the axios POST saveUser request:\n', err);
        });
    }
  }, [isAuthenticated, user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

}