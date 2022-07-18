import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Logo from './logo';
import classes from './main-navigation.module.css';
import SecondNav from './SecondNav';

function MainNavigation({ toggleDarkMode }) {
  let mywindow;
  if (typeof window !== 'undefined') {
    mywindow = window.innerWidth;
  }

  const [screenWidth, setScreenWidth] = useState(mywindow);

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
      <div className={classes.logo}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div>
          <button className={classes.btn} onClick={() => toggleDarkMode()}>
            <i style={{ marginLeft: '0.2rem' }} className="icon sun outline" />
            |
            <i style={{ marginLeft: '0.2rem' }} className="icon moon outline" />
          </button>
        </div>
      </div>

      <nav>
        {screenWidth > 768 ? (
          <ul>
            <li>
              <Link href="/posts">
                <a>Courses</a>
              </Link>
            </li>
            <li>
              <Link href="mailto:vignolo_3@hotmail.com">
                <a>Contact me</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Feedback</a>
              </Link>
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
