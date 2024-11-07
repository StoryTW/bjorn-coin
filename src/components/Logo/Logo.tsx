import React from 'react';
import styles from './Logo.module.scss';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src={'/images/logo.png'}
        alt='logo'
        width={95}
        height={95}
        sizes='(max-width: 475px) 44px, 44px'
        className={styles.image}
      />
      <span className={styles.name}>BJORN Coin</span>
    </div>
  );
};
