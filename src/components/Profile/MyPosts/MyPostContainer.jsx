import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";


// const onInput

const MyPostContainer = (props) => {
    const addPost = () =>{
        props.store.dispatch(addPostActionCreator());
    };

    const onInputChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    };
    return (
        <MyPost updateNewPostText={onInputChange} onAddPost={addPost}
                posts={props.store.state.profilePage.postData}
                newPostsText={props.store.state.profilePage.newPostText}/>
    )
};


export default MyPostContainer;
