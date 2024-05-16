import MobileMenu from '@/components/header/MobileMenu/MobileMenu';
import { nav } from '@/components/navigation';
import Link from 'next/link';
import { useMemo } from 'react';

import cs from './Header.module.scss';

export default function Header() {
  const navMenu = useMemo(() => {
    return (
      <nav>
        <ul className={cs.list}>
          {nav.map((item) => (
            <li className={cs.item} key={item.path}>
              <Link href={item.path}>
                {item.name}
              </Link>
            </li>))}
        </ul>
      </nav>
    );
  }, []);

  return (
    <header className={cs.header}>
      {navMenu}
      <MobileMenu nav={nav} />
    </header>
  );
}
