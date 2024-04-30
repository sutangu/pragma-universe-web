import Link from 'next/link';
import { nav } from '../navigation';

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          {
            /* Слайсим, чтобы в футере не было ссылки на главную */
            nav.slice(1).map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </footer>
  );
}
