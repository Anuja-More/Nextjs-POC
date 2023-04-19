import Link from 'next/link';
import styles from '../assets/styles/main/404.module.scss'

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContainer__error}>
        <h1 className={styles.errorContainer__heading}>404</h1>
        <h2 className={styles.errorContainer__headingh2}>Page Not Found</h2>
        <Link href="/products">
          <a className={styles.errorContainer__button}>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;