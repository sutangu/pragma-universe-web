import cs from './Footer.module.scss';
import Link from 'next/link';
import { nav } from '../navigation';

export default function Footer() {
  return (
    <footer>
      <nav className={cs.nav}>
        <ul className={cs.list}>
          {
            /* Слайсим, чтобы в футере не было ссылки на главную */
            nav.slice(1).map((item) => (
              <li className={cs.item} key={item.path}>
                <Link href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>

        <ul className={cs.list}>
          <li className={cs.item}>Библиотека Прагмы</li>
          <li className={cs.item}>Энциклопедия</li>
        </ul>

        <ul className={cs.list}>
          <li className={cs.item}>
            <Link href={'https://t.me/solar_grad/1'} target='_blank' rel='noopener noreferrer'>Кантина в ТГ</Link>
          </li>
        </ul>
      </nav>

      <div className={cs.year}>{(new Date()).getFullYear()}</div>
    </footer>
  );
}
