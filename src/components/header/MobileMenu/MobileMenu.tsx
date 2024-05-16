'use client';

import cs from './MobileMenu.module.scss';
import { NavigationMenuInterface } from '@/interfaces';
import Link from 'next/link';
import { KeyboardEvent, useEffect, useRef } from 'react';

const MobileMenu = ({ nav }: {nav: NavigationMenuInterface[]}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuItemClick = () => {
    const checkbox = document.getElementById('menu__toggle') as HTMLInputElement | null;
    if (checkbox && checkbox.type === 'checkbox') {
      checkbox.checked = false;
    }
  };

  const handleMenuItemKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      const checkbox = document.getElementById('menu__toggle') as HTMLInputElement | null;
      if (checkbox && checkbox.type === 'checkbox') {
        checkbox.checked = !checkbox.checked;
      }
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      const checkbox = document.getElementById('menu__toggle') as HTMLInputElement | null;
      if (checkbox && checkbox.type === 'checkbox') {
        checkbox.checked = false;
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      const checkbox = document.getElementById('menu__toggle') as HTMLInputElement | null;
      if (checkbox && checkbox.type === 'checkbox') {
        checkbox.checked = false;
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown as unknown as EventListener);
    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);
    return () => {
      document.removeEventListener('keydown', handleKeyDown as unknown as EventListener);
      document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
    };
  }, []);


  return (
    <div ref={menuRef} className={cs.hamburger}>
      <input className={cs.hamburger__toggle} id="menu__toggle" type="checkbox" />
      <label onKeyDown={handleMenuItemKeyDown} tabIndex={0} role="button" className={cs.hamburger__btn} htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={cs.hamburger__list}>
        {
          nav.map((item) => (
            <li className={cs.hamburger__item} key={item.path}>
              <Link onClick={handleMenuItemClick} href={item.path}>
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
