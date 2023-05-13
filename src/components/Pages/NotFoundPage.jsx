import MainLogo from '../MainLogo';
import * as styles from '../../styles/components/Pages/NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <section className={styles.container}>
      <MainLogo />
      <header className={styles.content}>
        <h1 className={styles.heading}>404</h1>
        <p>Not Found</p>
      </header>
    </section>
  );
}

export default NotFoundPage;
