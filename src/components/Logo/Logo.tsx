import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
export const Logo = () => {
  return (
    <div className={styles['logo']}>
      <Link to='/'>
        <div className={styles['logo-inner']}>
          <img src='/icons/logo.svg' alt='Логотип пиццы' />
          <div className={styles['logo-name']}>
            <h2 className={styles['title']}>next pizza</h2>
            <p className={styles['sub-title']}>вкусней уже некуда</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
