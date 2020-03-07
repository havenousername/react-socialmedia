import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";


// const onInput

const MyPostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                const addPost = () =>{
                    store.dispatch(addPostActionCreator());
                };

                const onInputChange = (text) => {
                    store.dispatch(updateNewPostActionCreator(text));
                };
                return (<MyPost updateNewPostText={onInputChange} onAddPost={addPost}
                        posts={state.profilePage.postData}
                        newPostsText={state.profilePage.newPostText}/>);
                }
            }
        </StoreContext.Consumer>
    )
};


export default MyPostContainer;
