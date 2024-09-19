import { Link } from 'react-router-dom';
import { Typography } from '../Typography/Typography';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles['logo']}>
      <Link to='/'>
        <div className={styles['logo-inner']}>
          <img src='/icons/logo.svg' alt='Логотип пиццы' />
          <div className={styles['logo-name']}>
            <Typography variant='title-logo' tag='h2'>
              next pizza
            </Typography>
            <Typography variant='sub-title-logo' tag='p'>
              вкусней уже некуда
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  );
};
