import React, { FC, HTMLAttributes } from 'react';
import IconTg from '@/assets/images/telegram.svg';
import IconX from '@/assets/images/twitter.svg';
import { ButtonLink } from '../ui/Buttons/ButtonLink/ButtonLink';
import styles from './Socials.module.scss';
import clsx from 'clsx';

export const Socials: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <ButtonLink href={'https://t.me/bjorn_solana'} target='_blank' className={styles.linkIcon}>
        <IconTg />
      </ButtonLink>
      <ButtonLink href={'https://x.com/bjorn_solana_'} target='_blank' className={styles.linkIcon}>
        <IconX />
      </ButtonLink>
    </div>
  );
};
