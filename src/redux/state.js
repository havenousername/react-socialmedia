// import {rerenderEntireTree} from "../render";

let rerenderEntireTree = () => {
    console.log("State has been changed");
};

const id = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));

let dialogsImage = [`https://d2hhj3gz5jljkm.cloudfront.net/891/1f10f/fb55/4d85/87f7/7c0acbc6bb29/original/3535374.jpg`,
            `https://www.rbc.ua/static/img/_/_/____30062_650x410__2__650x410.jpg`];
let dialogsNames = ['You', 'Vasea'];
let friendsNames = ['Anatolii', 'Katea', 'Petr'];
let friendsImages = ['https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
    'https://images.unsplash.com/photo-1565545389944-713b4819db07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80',
    'https://images.unsplash.com/photo-1559582865-775a8d1aa21c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80'];
let state = {
    profilePage: {postData:
            [{id: id(),header: 'Wow! New Amazing Feature',  likesCount: 12},
            {id: id(),header: 'Here is Jonhy!', likesCount: 100}],
            newPostText: '' },
    messagesPage:{
        dialogsData: [{id: id(),name: 'Vasea'},
            {id: id(),name: 'Dimich'},
            {id: id(),name: 'Kuzma'},
            {id: id(),name: 'Leonti'},
            {id: id(),name: 'Vlad'}],
        messagesData:  [{id: id(),names:dialogsNames[0],message: 'Hey man', image: dialogsImage[0]},
            {id: id(),names:dialogsNames[1],message: 'Hello,there', image: dialogsImage[1]},
            {id: id(),names:dialogsNames[0],message: 'How are u?', image: dialogsImage[0]},
            {id: id(),names:dialogsNames[1],message: 'Nice nigga!', image: dialogsImage[1]},
            {id: id(),names:dialogsNames[0],message: 'Why are u gay?', image: dialogsImage[0]},
            {id: id(),names:dialogsNames[1],message: 'Because I am president mutherfucker!', image: dialogsImage[1]}],
        newMessageText: ''},
    navPage: {
        navFriends:[{id:id(), name:friendsNames[0], image:friendsImages[0]},
            {id:id(), name:friendsNames[1], image:friendsImages[1]},
            {id:id(), name:friendsNames[2], image:friendsImages[2]},],
    }
};

window.state = state;

export const addPost = () =>{
    let  newPost = {
        id: id(),
        header: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
};
export const updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
};
export const addMessage = () => {
    let newMessage = {
        id: id(),
        names:dialogsNames[0],
        message: state.messagesPage.newMessageText,
        image: dialogsImage[0]
    };
    state.messagesPage.messagesData.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree();
};
export const updateMessageText = (newMessage) => {
    state.messagesPage.newMessageText = newMessage;
    rerenderEntireTree();
};
export const subscribe = (observer) => {
    rerenderEntireTree = observer; //pattern
};

export default state;

//store  - OOP