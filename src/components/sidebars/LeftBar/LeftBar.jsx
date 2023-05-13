import { useContext } from 'react';
import { LocalizationContext } from '../../../context/LocalizationContext';
import { UserContext } from '../../../context/UserContext';
import MainLogo from '../../MainLogo';
import Quote from './Quote';
import Nav from './Nav';
import styles from '../../../styles/components/sidebars/LeftBar/LeftBar.module.css';

function LeftBar() {
  const { t } = useContext(LocalizationContext);
  const { user } = useContext(UserContext);

  return (
    <aside className={styles.leftBarContainer}>
      <MainLogo />
      <h2 className={styles.greeting}>
        {t('leftBar.greeting')},
        <span className={styles.greetingName}> {user.name}!</span>
      </h2>
      <Quote />
      <Nav />
    </aside>
  );
}

export default LeftBar;
