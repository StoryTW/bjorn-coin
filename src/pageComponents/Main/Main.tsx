import React from 'react';
import styles from './Main.module.scss';
import Image from 'next/image';
import { ButtonsLinkWrapper } from '@/components/ButtonsLinkWrapper/ButtonsLinkWrapper';

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>Come on,</span> <img src='/images/flag.png' alt='us' className={styles.flag} />
            <br /> Let’s join our <br /> Community
          </h1>
          <ButtonsLinkWrapper />
          <div className={styles.description}>The Bear that knows everything about Trump...</div>
        </div>
        <div className={styles.image}>
          <Image
            src={'/images/main-image.png'}
            alt='main-image'
            style={{
              objectFit: 'contain',
            }}
            fill
          />
        </div>
      </div>
    </main>
  );
};
