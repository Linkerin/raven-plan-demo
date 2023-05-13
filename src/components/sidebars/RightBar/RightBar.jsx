import Clock from './Clock';
import Profile from './Profile';
import Language from './Language';
import Calendar from './Calendar/Calendar';
import Weather from './Weather';
import styles from '../../../styles/components/sidebars/RightBar/RightBar.module.css';

function RightBar() {
  return (
    <aside className={styles.rightBarContainer}>
      <div className={styles.profileLangContainer}>
        <Profile />
        <Language />
      </div>
      <Clock />
      <Calendar />
      <Weather />
    </aside>
  );
}

export default RightBar;
