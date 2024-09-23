import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import { Typography } from '@/components/Typography/Typography';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className={styles['main']}>
        <div className='main-top'>
          <div className='container'>
            <div className={styles['main-title']}>
              <Typography variant='title' tag='h1'>
                Все пиццы
              </Typography>
            </div>
          </div>
        </div>
        <div className='aside'></div>
        <div className='main-content'></div>
      </main>
    </>
  );
};
