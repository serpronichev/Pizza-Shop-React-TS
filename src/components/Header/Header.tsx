import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { Search } from '../Search/Search';
import styles from './Header.module.css';
export const Header = () => {
  return (
    <header className={styles['header']}>
      <div className='container'>
        <div className={styles['header-inner']}>
          <Logo />
          <Search />
          <div className={styles['user-actions']}>
            <Button className={styles['login-btn']}>
              <img src='/icons/login.svg' alt='Вы' />
              Войти
            </Button>
            <Button>
              <img src='/icons/cart.svg' alt='Корзина' />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
