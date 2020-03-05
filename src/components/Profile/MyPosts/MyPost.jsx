import React from 'react';
import styles from './MyPost.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


// const onInput

const MyPost = (props) => {
    let postDataMap = props.postData.postData.map(pt => <Post header={pt.header} likes={pt.likesCount}/>);

    let newPostElement = React.createRef();

    const addPost = () =>{
        props.dispatch(addPostActionCreator());
    };

    const onInputChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    };
    return (
        <div className={styles.mypost}>
            <h3>My posts</h3>
            <div className={styles.quote}>
                <textarea ref={newPostElement} onChange={onInputChange} value={props.postData.newPostText} />
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postDataMap}
            </div>
        </div>
    )
};


export default MyPost;
