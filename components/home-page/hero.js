import Image from 'next/image';


import classes from './hero.module.css';
import MyGrid from './MyGrid';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Lorenzo.png'
          alt='An image showing Lorenzo'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Lorenzo</h1>
      <h2>a frontend Developer</h2>
      <p>
        Welcome to my personal blog, where you can find some of my projects and courses that I´ve done to become a frontend Developer
      </p>
        <MyGrid />

    </section>
  );
}

export default Hero;
