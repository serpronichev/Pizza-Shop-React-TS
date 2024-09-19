import styles from './Button.module.css';
import React from 'react';

type ButtonVariant = 'contained' | 'outlined-m' | 'outlined-s';
interface ButtonProps extends React.ComponentProps<'button'> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
};
