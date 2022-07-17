import Image from 'next/image';
import { motion } from 'framer-motion';
import classes from './hero.module.css';
import MyGrid from './MyGrid';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Lorenzo.png"
          alt="An image showing Lorenzo"
          width={300}
          height={300}
        />
      </div>
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          delay: 0.2,
          type: 'spring',
        }}
      >
        Hi, I'm Lorenzo
      </motion.h1>
      <h2>a frontend Developer</h2>
      <p>
        Welcome to my personal blog, where you can find some of the projects and
        courses that I´ve done to become a frontend Developer
      </p>

      <MyGrid />
    </section>
  );
}

export default Hero;
