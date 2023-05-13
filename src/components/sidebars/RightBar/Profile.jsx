import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LocalizationContext } from '../../../context/LocalizationContext';
import { UserContext } from '../../../context/UserContext';
import styles from '../../../styles/components/sidebars/RightBar/Profile.module.css';

function Profile({ avatar }) {
  const { t } = useContext(LocalizationContext);
  const { user } = useContext(UserContext);
  let fullName = user?.name || 'User';
  if (user?.surname) fullName += ` ${user.surname}`;

  return (
    <div className={styles.profile}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>
          <img src={user.avatar} alt="avatar" />
        </div>
      </div>
      <Link to="/profile">
        <div className={styles.textsContainer}>
          <p className={styles.name}>{fullName}</p>
          <p className={styles.settings}>{t('rightBar.settings')}</p>
        </div>
      </Link>
    </div>
  );
}

export default Profile;
