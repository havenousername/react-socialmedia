const addPost ='ADD-POST';
const updatePost = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state,action) => {
    switch (action.type) {
        case addPost:
            let  newPost = {
                id: Math.floor((Math.random()*1000)),
                header: state.newPostText,
                likesCount: 0,
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case updatePost:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
};

export const updateNewPostActionCreator = (text) => {
    return {type: updatePost,
        text: text}
};
export const addPostActionCreator = () => ({type: addPost});


export default profileReducer;