import { Header } from '@/components/Header/Header';
import { Typography } from '@/components/Typography/Typography';
import { Category } from '@/components/Category/Category';
import { Sort } from '@/components/Sort/Sort';
import { Filter } from '@/components/Filter/Filter';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className={styles['main']}>
        <div className='container'>
          <div className={styles['main-title']}>
            <Typography variant='title' tag='h1'>
              Все пиццы
            </Typography>
          </div>
          <div className={styles['category-sort']}>
            <Category />
            <Sort />
          </div>
          <div className={styles['main-content']}>
            <Filter />
            <div>Goods!!!</div>
          </div>
        </div>
      </main>
    </>
  );
};
