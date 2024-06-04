import Link from 'next/link';
import classes from './Footer.module.css';

import Background from './Background';

import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <Link href='/'>Foodie</Link>
          </div>
          <div className={classes.social}>
            <a
              href='https://www.linkedin.com/in/akabaytar/'
              target='_blank'
              rel='noopener noreferrer'
              id='linkedin'>
              <FaLinkedinIn />
            </a>
            <a
              href='https://github.com/akaBaytar'
              target='_blank'
              rel='noopener noreferrer'
              id='github'>
              <FaGithub />
            </a>
            <a
              href='https://x.com/akaBaytar'
              target='_blank'
              rel='noopener noreferrer'
              id='twitter'>
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className={classes.copy}>
          <p>&copy; {new Date().getFullYear()} Foodie. All rights reserved.</p>
        </div>
        <Background />
      </footer>
    </>
  );
}
