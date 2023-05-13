import { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <LocationContext.Provider value={pathname}>
      {children}
    </LocationContext.Provider>
  );
};

LocationProvider.propTypes = {
  children: PropTypes.node
};
