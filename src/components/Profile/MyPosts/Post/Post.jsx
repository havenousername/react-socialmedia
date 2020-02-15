import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <article className={styles.post}>
      <h3>{props.header}</h3>
      <div>
        <span>{props.likes}Likes</span>
        <span>Dislike</span>
      </div>
    </article>
  )
}

export default Post;