import { Header } from '@/components/Header/Header';
import { Typography } from '@/components/Typography/Typography';
import { Category } from '@/components/Category/Category';
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
            <div className={styles['main-top__content']}>
              <Category />
              <div>Sort</div>
            </div>
          </div>
        </div>
        <div className='aside'></div>
        <div className='main-content'></div>
      </main>
    </>
  );
};
