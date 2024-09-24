import { useState } from 'react';
import styles from './Sort.module.css';

type SortProps = 'Популярное' | 'Новинки' | 'Дорогие' | 'Недорогие';

const sortByName: SortProps[] = ['Популярное', 'Новинки', 'Дорогие', 'Недорогие'];
export const Sort = () => {
  const [sortIsOpen, setSortIsOpen] = useState(false);

  const handleDropDownSort = () => setSortIsOpen(!sortIsOpen);

  console.log(sortIsOpen);
  return (
    <div className={styles['dropdown']}>
      <button className={styles['dropdown-toggle']} onClick={handleDropDownSort}>
        <img src='/icons/up-down-arrow.svg' alt='Up-Down-Arrow' />
        <b>Сортировка:</b>
        <b>популярное</b>
      </button>
      {sortIsOpen && (
        <div className={styles['dropdown-box']}>
          <ul className={styles['dropdown-menu']}>
            {sortByName.map((item, index) => (
              <li key={index}>
                <p>Сначала {item}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
