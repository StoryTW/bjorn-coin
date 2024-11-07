import React from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/components/Logo/Logo';
import { Socials } from '@/components/Socials/Socials';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Socials className={styles.socials} />
    </header>
  );
};
