import Link from 'next/link';
import React from 'react';

import classes from "./secondNav.module.css"

const SecondNav = () => {
    return (
        <div className={classes.dropdown}>
        <button className={classes.dropbtn}>Dropdown 👀
       
        </button>
            <div className={classes.dropdownContent}>
            <Link href="/posts"><a >Courses</a></Link>
            <Link href="mailto:vignolo_3@hotmail.com"><a >Contact Me</a></Link>
            <Link href='/contact'><a >Feedback</a></Link>
        </div>
            
        </div>
    );
};

export default SecondNav;


<ul>
<li>
  <Link href='/posts'>Courses</Link>
</li>
<li>
  <Link href='/posts'>Contact me</Link>
</li>
<li>
  <Link href='/contact'>Feedback</Link>
</li>
</ul>