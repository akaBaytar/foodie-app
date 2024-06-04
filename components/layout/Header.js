import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/public/assets/logo.png';
import classes from './Header.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href='/' className={classes.logo}>
        <Image src={Logo.src} alt='Foodie' width='1024' height='1024' priority/>
        <span>Foodie</span>
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href='/meals'>Meals</Link>
          </li>
          <li>
            <Link href='/community'>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
