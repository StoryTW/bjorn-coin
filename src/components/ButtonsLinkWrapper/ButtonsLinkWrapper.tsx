'use client'
import React from 'react';
import styles from './ButtonsLinkWrapper.module.scss';
import { ButtonLink } from '../ui/Buttons/ButtonLink/ButtonLink';
import { Button } from '../ui/Buttons/Button/Button';
import Image from 'next/image';
import { CONTRACT_HASH } from '@/utils/constants';

export const ButtonsLinkWrapper = () => {
  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      window.navigator.clipboard.writeText(CONTRACT_HASH);
    }
  };

  return (
    <div className={styles.root}>
      <ButtonLink
        href={'https://dexscreener.com/solana/avvfcwavxy7nt2ljbddbew7kwexrvgu6etldh14baccm'}
        target='_blank'
      >
        DEXSCREENER
      </ButtonLink>
      <Button onClick={handleCopy}>
        <div className={styles.contract}>
          CONTRACT
          <Image src={'/images/icon-copy.svg'} alt='copy' width={22} height={22} />
        </div>
      </Button>
      <ButtonLink
        href={'https://t.me/bjorn_solana'}
        target='_blank'
        className={styles.linkIcon}
      >
        <Image src={'/images/telegram.svg'} alt='copy' width={34} height={34} />
      </ButtonLink>
      <ButtonLink
        href={'https://x.com/bjorn_solana_'}
        target='_blank'
        className={styles.linkIcon}
      >
        <Image src={'/images/twitter.svg'} alt='copy' width={34} height={34} />
      </ButtonLink>
    </div>
  );
};
