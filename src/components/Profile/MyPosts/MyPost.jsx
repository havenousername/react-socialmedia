import React from 'react';
import styles from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    let postDataMap = props.posts.map(pt => <Post header={pt.header} likes={pt.likesCount}/>);

    let newPostElement = React.createRef();

    const addPost = () =>{
        props.onAddPost();
    };

    const onInputChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={styles.mypost}>
            <h3>My posts</h3>
            <div className={styles.quote}>
                <textarea ref={newPostElement} onChange={onInputChange} value={props.newPostsText} />
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postDataMap}
            </div>
        </div>
    )
};


export default MyPost;
