import React from 'react';
import styles from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
  return ( 
    <div className={styles.mypost}>
      My posts
      <textarea></textarea>
      <button>Add Post</button>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPost;