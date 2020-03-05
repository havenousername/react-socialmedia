const addPost ='ADD-POST';
const updatePost = 'UPDATE-NEW-POST-TEXT';

let id = Symbol();
let inicialState = {
    postData:
        [{[id]:Math.floor((Math.random()*1000)), header: 'Wow! New Amazing Feature', likesCount: 12},
            {[id]:Math.floor((Math.random()*1000)), header: 'Here is Jonhy!', likesCount: 100}],
    newPostText: ''
};

const profileReducer = (state = inicialState,action) => {
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