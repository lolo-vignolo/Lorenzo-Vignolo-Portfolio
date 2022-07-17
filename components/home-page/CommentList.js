import React from 'react';
import classes from './commentList.module.css';

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((com) => {
        return (
          <li className={classes.list} key={com._id}>
            <h3>{com.name}:</h3>
            <p>{com.message}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
