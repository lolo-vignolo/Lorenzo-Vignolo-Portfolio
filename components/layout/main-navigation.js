import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Logo from './logo';
import classes from './main-navigation.module.css';
import SecondNav from './SecondNav';

function MainNavigation() {
  const [screenWidth, setScreenWidth] = useState(490);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        {screenWidth > 768 ? (
          <ul>
            <li>
              <Link href="/posts">Courses</Link>
            </li>
            <li>
              <Link href="mailto:vignolo_3@hotmail.com">Contact me</Link>
            </li>
            <li>
              <Link href="/contact">Feedback</Link>
            </li>
          </ul>
        ) : (
          <SecondNav />
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
