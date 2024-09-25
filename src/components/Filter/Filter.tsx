import { useState } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { Typography } from '../Typography/Typography';
import styles from './Filter.module.css';
export const Filter = () => {
  const [boxChecked, setBoxChecked] = useState(false);

  return (
    <div className={styles['filter']}>
      <Typography variant='filter-title' tag='h2'>
        Фильтрация
      </Typography>
      <div className={styles['new']}>
        <Checkbox isChecked={boxChecked} onChange={setBoxChecked}>
          Можно собирать
        </Checkbox>
        <Checkbox>Новинки</Checkbox>
      </div>
    </div>
  );
};
