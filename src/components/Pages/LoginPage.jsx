import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import Button from '../Button';
import Input from '../auth/Input';
import Language from '../sidebars/RightBar/Language';
import { LocalizationContext } from '../../context/LocalizationContext';
import Logo from '../auth/Logo';
import * as styles from '../../styles/components/Pages/LoginPage.module.css';

function LoginPage() {
  const { auth, setAuth } = useContext(AuthContext);
  const { t } = useContext(LocalizationContext);

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    sessionStorage.setItem('accessToken', crypto.randomUUID());
    setAuth(true);
    navigate('/');
    return;
  };

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  return (
    <div className={styles.container}>
      <Logo />
      <section className={styles.sideContainer}>
        <nav className={styles.navContainer}>
          <Language />
        </nav>
        <form className={styles.inputsForm}>
          <h1 className={styles.heading}>{t('login.login')}</h1>
          <Input
            label={t('login.email')}
            name="email"
            value={data.email}
            type="email"
            handleChange={handleChange}
            autoFocus={true}
          />
          <Input
            label={t('login.password')}
            name="password"
            value={data.password}
            type="password"
            handleChange={handleChange}
          />
          <Button
            content={t('login.login')}
            styling={styles.createBtn}
            onClick={handleSubmit}
          />
        </form>
        <p className={styles.link}>{t('login.anyData')} </p>
      </section>
    </div>
  );
}

export default LoginPage;
