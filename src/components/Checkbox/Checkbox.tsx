import styles from './Checkbox.module.css';
type CheckboxProps = {
  children: React.ReactNode;
  isChecked: boolean;
  onChange: (prev: boolean) => boolean;
};

export const Checkbox = ({ isChecked, onChange, children }: CheckboxProps) => {
  return (
    <label className={styles['checkbox-wrapper']}>
      <input
        checked={isChecked}
        onChange={() => onChange((prev) => !prev)}
        className={styles['checkbox-element']}
        type='checkbox'
      />
      <p>{children}</p>
    </label>
  );
};
