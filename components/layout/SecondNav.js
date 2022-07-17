import Link from 'next/link';
import React from 'react';

import classes from './secondNav.module.css';

const SecondNav = () => {
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>Menu</button>
      <div className={classes.dropdownContent}>
        <Link href="/posts">
          <a>Courses</a>
        </Link>
        <Link href="mailto:vignolo_3@hotmail.com">
          <a>Contact Me</a>
        </Link>
        <Link href="/contact">
          <a>Feedback</a>
        </Link>
      </div>
    </div>
  );
};

export default SecondNav;
