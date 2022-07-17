import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import classes from './post-item.module.css';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  }),
};

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const { index } = props;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <motion.li
      className={classes.post}
      custom={{ delay: (index + 1) * 0.3 }}
      initial="hidden"
      animate="visible"
      exit={'hidden'}
      variants={variants}
    >
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p className={classes.paragraph}>{excerpt}</p>
          </div>
        </a>
      </Link>
    </motion.li>
  );
}

export default PostItem;
