import React from 'react';
import styles from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    let postDataMap = props.postData.state.postData.map(pt => <Post header={pt.header} likes={pt.likesCount}/>);

    let newPostElement = React.createRef();
    const addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };
    return (
        <div className={styles.mypost}>
            <h3>My posts</h3>
            <div className={styles.quote}>
                <textarea ref={newPostElement} placeholder={'Type something'}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postDataMap}
            </div>
        </div>
    )
};

export default MyPost;
