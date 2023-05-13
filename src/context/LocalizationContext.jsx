import { createContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export const LocalizationContext = createContext(null);

export const LocalizationProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  return (
    <LocalizationContext.Provider value={{ t, i18n }}>
      {children}
    </LocalizationContext.Provider>
  );
};

LocalizationProvider.propTypes = {
  children: PropTypes.node
};
