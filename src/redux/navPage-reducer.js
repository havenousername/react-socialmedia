let info = {
    _friendsNames: ['Anatolii', 'Katea', 'Petr'],
    _friendsImages: ['https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
        'https://images.unsplash.com/photo-1565545389944-713b4819db07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80',
        'https://images.unsplash.com/photo-1559582865-775a8d1aa21c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80'],
};


let inicialState = {
    navFriends: [{id: Math.floor((Math.random()*1000)), name: info._friendsNames[0], image: info._friendsImages[0]},
        {id: Math.floor((Math.random()*1000)), name: info._friendsNames[1], image: info._friendsImages[1]},
        {id: Math.floor((Math.random()*1000)), name: info._friendsNames[2], image: info._friendsImages[2]},],
};


const navPageReducer = (state = inicialState) => {
    return state;
};
export default navPageReducer;
