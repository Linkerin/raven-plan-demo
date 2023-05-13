import { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from './AuthContext';
import dateStringFormatter from '../utils/dates';
import defaultAvatar from '../assets/img/defaultAvatar.png';
import dbUser from '../db/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    role: '',
    createdAt: '',
    avatar: defaultAvatar
  });
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = JSON.parse(JSON.stringify(dbUser));
        userData.createdAt = dateStringFormatter(userData.createdAt);
        setUser(prevState => {
          const newState = { ...prevState, ...userData };

          return newState;
        });
      } catch (err) {
        console.error('Error occurred while fetching user data.');
        return;
      }
    };

    if (auth) {
      getUserData();
    }
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node
};
