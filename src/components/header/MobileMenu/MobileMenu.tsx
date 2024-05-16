import cs from './MobileMenu.module.scss';
import { NavigationMenuInterface } from '@/interfaces';
import Link from 'next/link';

const MobileMenu = ({ nav }: NavigationMenuInterface[]) => {
  return (
    <div className={cs.hamburger}>
      <input className={cs.hamburger__toggle} id="menu__toggle" type="checkbox" />
      <label className={cs.hamburger__btn} htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={cs.hamburger__list}>
        {
          nav.map((item) => (
            <li className={cs.hamburger__item} key={item.path}>
              <Link href={item.path}>
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MobileMenu;
