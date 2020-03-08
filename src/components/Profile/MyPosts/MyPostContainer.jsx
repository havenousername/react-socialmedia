import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


// const onInput

// const MyPostContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//                 const addPost = () =>{
//                     store.dispatch(addPostActionCreator());
//                 };
//
//                 const onInputChange = (text) => {
//                     store.dispatch(updateNewPostActionCreator(text));
//                 };
//                 return (<MyPost updateNewPostText={onInputChange} onAddPost={addPost}
//                         posts={state.profilePage.postData}
//                         newPostsText={state.profilePage.newPostText}/>);
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostsText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: function(text) {
            dispatch(updateNewPostActionCreator(text))
        },
        onAddPost: function(){
            dispatch(addPostActionCreator())
        },
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default MyPostsContainer;
