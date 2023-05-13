import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { LocalizationContext } from '../../context/LocalizationContext';
import { UserContext } from '../../context/UserContext';
import Button from '../Button';
import * as styles from '../../styles/components/profile/Profile.module.css';

function Profile() {
  const [hovered, setHovered] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: ''
  });

  const navigation = useNavigate();

  const { t } = useContext(LocalizationContext);

  const { user } = useContext(UserContext);
  let fullName = user.name;
  if (user.surname) fullName += ` ${user.surname}`;

  const editIcon = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5 15.2268C24.4699 16.2368 20.4298 12.1967 21.4399 9.16666M22.6848 7.92175L16.1567 14.4498C13.3187 17.2878 11.3054 20.8437 10.3319 24.7374L10.0165 25.9992C9.91823 26.3923 10.2743 26.7484 10.6675 26.6501L11.9292 26.3347C15.8229 25.3613 19.3789 23.3479 22.2169 20.5099L28.7449 13.9819C29.5485 13.1783 30 12.0883 30 10.9518C30 8.58519 28.0815 6.66666 25.7148 6.66666C24.5783 6.66666 23.4884 7.11813 22.6848 7.92175Z"
        stroke="#543792"
        strokeWidth="2"
      />
      <path
        d="M31.6663 33.3333H8.33301"
        stroke="#543792"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const toggleHovered = e => {
    switch (e.type) {
      case 'mouseenter':
        setHovered(true);
        break;
      case 'mouseleave':
        setHovered(false);
        break;
      default:
        console.log('Other event type');
    }
  };

  const handleChange = e => {
    e.preventDefault();

    setPasswords(prevPasswords => {
      const { name, value } = e.target;

      return { ...prevPasswords, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!passwords.oldPassword || !passwords.newPassword) return;
  };

  const handleLogout = async e => {
    e.preventDefault();
    sessionStorage.removeItem('accessToken');
    navigation('/login');
  };

  return (
    <section className={styles.profile}>
      <div className={styles.heading}>
        <div
          className={styles.avatarContainer}
          onMouseEnter={toggleHovered}
          onMouseLeave={toggleHovered}
        >
          <div className={styles.avatar}>
            <img src={user.avatar} alt="avatar" />
          </div>
          {hovered && <div className={styles.avatarHovered}>{editIcon}</div>}
        </div>
        <div className={styles.userInfo}>
          <h1 className={styles.name}>{fullName}</h1>
          <p className={styles.userInfoText}>
            {t('profile.withRavenPlan')}
            <span className={styles.userDataFont}> {user.createdAt}</span>
          </p>
          <p className={`${styles.userInfoText} ${styles.email}`}>
            {t('profile.email')}:
            <span className={styles.userDataFont}> {user.email}</span>
          </p>
        </div>
      </div>
      <section className={styles.changePasswordContainer}>
        <h2 className={styles.changePasswordHeading}>
          {t('profile.changePswd')}
        </h2>
        <form onSubmit={handleSubmit}>
          <label>
            <p className={styles.labelName}>{t('profile.oldPswd')}</p>
            <input
              className={styles.passwordInput}
              name="oldPassword"
              type="password"
              value={passwords.oldPassword}
              onChange={handleChange}
            />
          </label>
          <label>
            <p className={styles.labelName}>{t('profile.newPswd')}</p>
            <input
              className={styles.passwordInput}
              name="newPassword"
              type="password"
              value={passwords.newPassword}
              onChange={handleChange}
            />
          </label>
          <Button content={t('profile.changePswd')} />
        </form>
        <Button content={t('profile.logout')} onClick={handleLogout} />
      </section>
    </section>
  );
}

export default Profile;
