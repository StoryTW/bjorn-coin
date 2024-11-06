import React, { FC, HTMLAttributes } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx'

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props }) => {
  return (
    <button className={clsx(styles.btn, className)} type='button' {...props}>
      {children}
    </button>
  );
};
