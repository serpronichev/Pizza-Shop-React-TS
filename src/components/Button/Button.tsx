import { ButtonProps } from '../../types/Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(styles['button'], className)} {...props}>
      {children}
    </button>
  );
};
