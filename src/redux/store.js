// import {rerenderEntireTree} from "../render";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navPageReducer from "./navPage-reducer";


let id = Symbol('id');
let info ={
    _dialogsImage: [`https://d2hhj3gz5jljkm.cloudfront.net/891/1f10f/fb55/4d85/87f7/7c0acbc6bb29/original/3535374.jpg`,
        `https://www.rbc.ua/static/img/_/_/____30062_650x410__2__650x410.jpg`],
    _dialogsNames: ['You', 'Vasea'],
    _friendsNames: ['Anatolii', 'Katea', 'Petr'],
    _friendsImages: ['https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
        'https://images.unsplash.com/photo-1565545389944-713b4819db07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80',
        'https://images.unsplash.com/photo-1559582865-775a8d1aa21c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80'],
};
let store = {
    _state: {
        profilePage: {
            postData:
                [{[id]:Math.floor((Math.random()*1000)), header: 'Wow! New Amazing Feature', likesCount: 12},
                    {[id]:Math.floor((Math.random()*1000)), header: 'Here is Jonhy!', likesCount: 100}],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [{[id]: Math.floor((Math.random()*1000)), name: 'Vasea'},
                {[id]: Math.floor((Math.random()*1000)), name: 'Dimich'},
                {[id]: Math.floor((Math.random()*1000)), name: 'Kuzma'},
                {[id]: Math.floor((Math.random()*1000)), name: 'Leonti'},
                {[id]: Math.floor((Math.random()*1000)), name: 'Vlad'}],
            messagesData: [{id:Math.floor((Math.random()*1000)), names: info._dialogsNames[0], message: 'Hey man', image: info._dialogsImage[0]},
                {[id]: Math.floor((Math.random()*1000)), names: info._dialogsNames[1], message: 'Hello,there', image: info._dialogsImage[1]},
                {[id]: Math.floor((Math.random()*1000)), names: info._dialogsNames[0], message: 'How are u?', image: info._dialogsImage[0]},
                {[id]: Math.floor((Math.random()*1000)), names: info._dialogsNames[1], message: 'Nice nigga!', image: info._dialogsImage[1]},
                {[id]: Math.floor((Math.random()*1000)), names: info._dialogsNames[0], message: 'Why are u gay?', image: info._dialogsImage[0]},
                {
                    [id]: Math.floor((Math.random()*1000)),
                    names: info._dialogsNames[1],
                    message: 'Because I am president mutherfucker!',
                    image: info._dialogsImage[1]
                }],
            newMessageText: ''
        },
        navPage: {
            navFriends: [{[id]: Math.floor((Math.random()*1000)), name: info._friendsNames[0], image: info._friendsImages[0]},
                {[id]: Math.floor((Math.random()*1000)), name: info._friendsNames[1], image: info._friendsImages[1]},
                {[id]: Math.floor((Math.random()*1000)), name: info._friendsNames[2], image: info._friendsImages[2]},],
        },
    },
    _callSubscriber () {
        console.log("State has been changed");
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer; //pattern
    },

    dispatch(action){  // {type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action,info);
        this._state.navPage = navPageReducer(this._state.navPage, action);
        this._callSubscriber(this._state);

        // if (action.type === 'ADD-POST'){
        //     let  newPost = {
        //         [id]: Math.floor((Math.random()*1000)),
        //         header: this._state.profilePage.newPostText,
        //         likesCount: 0,
        //     };
        //     this._state.profilePage.postData.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // }
        // else if(action.type === 'UPDATE-NEW-POST-TEXT'){
        //     this._state.profilePage.newPostText = action.text;
        //     this._callSubscriber(this._state);
        // }
        //
        // if (action.type === 'ADD-MESSAGE'){
        //     let newMessage = {
        //         [id]: Math.floor((Math.random()*1000)),
        //         names: info._dialogsNames[0],
        //         message: this._state.messagesPage.newMessageText,
        //         image: info._dialogsImage[0]
        //     };
        //     this._state.messagesPage.messagesData.push(newMessage);
        //     this._state.messagesPage.newMessageText = '';
        //     this._callSubscriber(this._state);
        // }
        // else if(action.type === 'UPDATE-MESSAGE-TEXT'){
        //     this._state.messagesPage.newMessageText = action.newMessage;
        //     this._callSubscriber(this._state);
        // }
    }
};

window.state = store;

export default store;

// store  - OOP