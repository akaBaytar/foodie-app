import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/public/assets/logo.png';
import Background from './Background';
import NavLink from './Nav';

import classes from './Header.module.css';

export default function MainHeader() {
  return (
    <>
      <Background />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <Image
            src={Logo.src}
            alt='Foodie'
            width='1024'
            height='1024'
            priority
          />
          <span>Foodie</span>
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
