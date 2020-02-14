import React from 'react';
import styles from './Post.module.css';

const Post = () => {
  return (
    <article className={styles.post}>
      Post one
      <div>
        <span>Like</span>
        <span>Dislike</span>
      </div>
    </article>
  )
}

export default Post;