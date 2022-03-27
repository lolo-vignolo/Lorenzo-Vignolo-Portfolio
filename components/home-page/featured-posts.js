import Link from 'next/link';
import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';
import { SiLinkedin , SiGithub } from "react-icons/si";
import { MdForwardToInbox } from "react-icons/md";
import Comments from './Comments';


function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Some Projects</h2>
     <div>
        <ul className={classes.ulicon}>
          <li className={classes.icon1}>
            <Link href='https://www.linkedin.com/in/lorenzo-vignolo-prof/'><SiLinkedin /></Link>
          </li>
          <li className={classes.icon2}>
            <Link href='https://github.com/lolo-vignolo'><SiGithub /></Link>
          </li>
          <li className={classes.icon3}>
            <Link href="mailto:vignolo_3@hotmail.com"><MdForwardToInbox /></Link>
          </li>
        </ul>
     </div> 
      <PostsGrid posts={props.posts} />
      <h1 className={classes.feedback}>User Feedbacks 😄</h1>
      <p className={classes.order} >(Write your feedback in the Feedback tab)</p>
      <Comments />
    </section>
  );
}

export default FeaturedPosts;
