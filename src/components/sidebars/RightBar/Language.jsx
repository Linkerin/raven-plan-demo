import { useState, useRef, useEffect, useContext } from 'react';

import { LocalizationContext } from '../../../context/LocalizationContext';
import World from '../../icons/World';
import * as styles from '../../../styles/components/sidebars/RightBar/Language.module.css';

function Language() {
  const [show, setShow] = useState(false);

  const { i18n } = useContext(LocalizationContext);
  const langs = ['en', 'ru', 'de'];
  const lngSelectRef = useRef();

  const handleSelectorClick = e => {
    e.preventDefault();
    setShow(!show);
  };

  const handleLngClick = e => {
    e.preventDefault();
    i18n.changeLanguage(e.target.id);
    setShow(false);
  };

  const handleOutClick = e => {
    if (lngSelectRef.current?.contains(e.target)) return;
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleOutClick);
    } else {
      document.removeEventListener('mousedown', handleOutClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, [show]);

  return (
    <div
      className={styles.lngSelect}
      onClick={handleSelectorClick}
      ref={lngSelectRef}
    >
      <div className={styles.lngIconContainer}>{<World />}</div>
      {show && (
        <div className={styles.lngsContainer}>
          {langs.map(lng => {
            return (
              <div key={lng} className={styles.lng}>
                <p id={lng} onClick={handleLngClick}>
                  {lng.toUpperCase()}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Language;
