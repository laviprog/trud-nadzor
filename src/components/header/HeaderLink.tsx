import Link from 'next/link';
import { ReactNode, MouseEventHandler } from 'react';
import styles from './HeaderLink.module.css';

interface HeaderLinkProps {
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function HeaderLink({ href, children, onClick }: Readonly<HeaderLinkProps>) {
  return (
    <Link href={href} className={styles.link} onClick={onClick}>
      {children}
    </Link>
  );
}
