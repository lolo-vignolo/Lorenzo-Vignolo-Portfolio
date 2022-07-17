import { motion } from 'framer-motion';
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPosts(props) {
  return (
    <motion.div layout className={classes.allPosts}>
      <section className={classes.posts}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ color: '#4299e1' }}
        >
          Courser and Projects
        </motion.h1>
        <PostsGrid posts={props.posts} />
      </section>
    </motion.div>
  );
}

export default AllPosts;
