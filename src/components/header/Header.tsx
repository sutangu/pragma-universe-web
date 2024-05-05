import { nav } from '@/components/navigation';
import Link from 'next/link';
import cs from './Header.module.scss';

export default function Header () {
  return (
    <header className={cs.header}>
      <nav>
        <ul className={cs.list}>
          {
            nav.map((item) => (
              <li className={cs.item} key={item.path}>
                <Link href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}
