let state = {
    profilePage : {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'It"s my first post', likesCount: 34},
            {id: 3, message: 'cool site', likesCount: 15},
            {id: 4, message: 'best ', likesCount: 9},
            {id: 5, message: 'ce facem vara?'},
            {id: 6, message: 'hop hop hop'}
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'salut iubire'},
            {id: 2, message: 'te iubesc motan dulce'},
            {id: 3, message: 'yoyo'},
            {id: 4, message: 'nu vreau sa ies cu Laura'},
            {id: 5, message: 'cand ii ziua de nastere a Laurei?'},
            {id: 6, message: 'M-am zaebit de odessa'}
        ],
        dialogs: [
            {id: 1, name: 'Danu'},
            {id: 2, name: 'Laura'},
            {id: 3, name: 'Andreia'},
            {id: 4, name: 'Gabi'},
            {id: 5, name: 'Chetraru'},
            {id: 6, name: 'Valera'}
        ]
    },
    sitebar: {}
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 7,
        message: postMessage,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
}


export default state;