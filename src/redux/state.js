import {rerenderEntireTree} from "../render";

let dialogsImage = [`https://d2hhj3gz5jljkm.cloudfront.net/891/1f10f/fb55/4d85/87f7/7c0acbc6bb29/original/3535374.jpg`,
            `https://www.rbc.ua/static/img/_/_/____30062_650x410__2__650x410.jpg`];
let dialogsNames = ['You', 'Vasea'];

let friendsNames = ['Anatolii', 'Katea', 'Petr'];
let friendsImages = ['https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
    'https://images.unsplash.com/photo-1565545389944-713b4819db07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80',
    'https://images.unsplash.com/photo-1559582865-775a8d1aa21c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80'];

let state = {
    profilePage: {postData:
            [{id: 1,header: 'Wow! New Amazing Feature',  likesCount: 12},
            {id: 2,header: 'Here is Jonhy!', likesCount: 100}]},
    messagesPage:{
        dialogsData: [{id: 1,name: 'Vasea'},
            {id: 2,name: 'Dimich'},
            {id: 3,name: 'Kuzma'},
            {id: 4,name: 'Leonti'},
            {id: 5,name: 'Vlad'}],
        messagesData:  [{id: 1,names:dialogsNames,message: 'Hey man', image: dialogsImage},
            {id: 2,names:dialogsNames,message: 'Hello,there', image: dialogsImage},
            {id: 3,names:dialogsNames,message: 'How are u?', image: dialogsImage},
            {id: 4,names:dialogsNames,message: 'Nice nigga!', image: dialogsImage},
            {id: 5,names:dialogsNames,message: 'Why are u gay?', image: dialogsImage},
            {id: 6,names:dialogsNames,message: 'Because I am president mutherfucker!', image: dialogsImage}],},
    navPage: {
        navFriends:[{id:1, name:friendsNames[0], image:friendsImages[0]},
            {id:2, name:friendsNames[1], image:friendsImages[1]},
            {id:3, name:friendsNames[2], image:friendsImages[2]},],
    }
};

export let addPost = (postMessage) =>{
    let  newPost = {
        id: 5,
        header: postMessage,
        likesCount: 0,
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
};
export default state;
