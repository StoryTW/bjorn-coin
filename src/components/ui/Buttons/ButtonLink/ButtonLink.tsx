import React, { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './ButtonLink.module.scss';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx'

type TButtonLink = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & PropsWithChildren;

export const ButtonLink: FC<TButtonLink> = ({ href, children, className, ...props }) => {
  return (
    <Link className={clsx(styles.btnLink, className)} href={href} {...props}>
      {children}
    </Link>
  );
};
