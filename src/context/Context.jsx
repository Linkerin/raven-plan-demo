import PropTypes from 'prop-types';

import { LocalizationProvider } from './LocalizationContext';
import { UserProvider } from './UserContext';
import { AuthProvider } from './AuthContext';

function ContextProvider({ children }) {
  return (
    <>
      <LocalizationProvider>
        <AuthProvider>
          <UserProvider>{children}</UserProvider>
        </AuthProvider>
      </LocalizationProvider>
    </>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node
};
