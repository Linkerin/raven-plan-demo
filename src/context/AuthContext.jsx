import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({ auth: false, setAuth: null });

export const AuthProvider = ({ children }) => {
  const accessToken = sessionStorage.getItem('accessToken');

  const [auth, setAuth] = useState(!!accessToken);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};
