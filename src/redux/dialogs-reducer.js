const addMessage = 'ADD-MESSAGE';
const updateMessage = 'UPDATE-NEW-POST-MESSAGE';
let info ={
    _dialogsImage: [`https://d2hhj3gz5jljkm.cloudfront.net/891/1f10f/fb55/4d85/87f7/7c0acbc6bb29/original/3535374.jpg`,
        `https://www.rbc.ua/static/img/_/_/____30062_650x410__2__650x410.jpg`],
    _dialogsNames: ['You', 'Vasea'],
    _friendsNames: ['Anatolii', 'Katea', 'Petr'],
    _friendsImages: ['https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
        'https://images.unsplash.com/photo-1565545389944-713b4819db07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80',
        'https://images.unsplash.com/photo-1559582865-775a8d1aa21c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80'],
};
let id = Symbol();

let inicialState = {
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
};

const dialogsReducer = (state = inicialState,action) => {
    // console.log(action.text);
    switch (action.type) {
        case addMessage:
            let newMessage = {
                id: Math.floor((Math.random()*1000)),
                names: info._dialogsNames[0],
                message: state.newMessageText,
                image: info._dialogsImage[0]
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case updateMessage:
            state.newMessageText = action.text;
            return state;
        default:
            return state
    }
};

export const addTextActionCreator = () => ({type: addMessage});
export const updateNewMessageActionCreator = (text) => {
    return {type: updateMessage,
        text: text}
};

export default dialogsReducer;