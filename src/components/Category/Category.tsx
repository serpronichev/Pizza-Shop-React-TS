import { Typography } from '../Typography/Typography';
import styles from './Category.module.css';

type CategoryProps = 'Все' | 'Мясные' | 'Острые' | 'Сладкие' | 'Вегетарианские' | 'C курицей';

const category: CategoryProps[] = [
  'Все',
  'Мясные',
  'Острые',
  'Сладкие',
  'Вегетарианские',
  'C курицей'
];

export const Category = () => {
  return (
    <div className={styles['category']}>
      <ul className={styles['category-list']}>
        {category.map((item, index) => (
          <li className={styles['category-item']} key={index}>
            <Typography variant='category-title' tag='p'>
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
