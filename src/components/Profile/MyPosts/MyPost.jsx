import React from 'react';
import styles from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    let postDataMap = props.postData.state.postData.map(pt => <Post header={pt.header} likes={pt.likesCount}/>);

    return (
        <div className={styles.mypost}>
            <h3>My posts</h3>
            <div className={styles.quote}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postDataMap}
            </div>
        </div>
    )
}

export default MyPost;