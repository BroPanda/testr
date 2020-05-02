import {reRenderUI} from "../render";

let state = {
    profilePagePosts: [
        {id: 1, message: `some post`, likesCount: 12},
        {id: 2, message: `some post`, likesCount: 11}
    ],
    dialogPage: {
        dialogData: [
            {id: 1, name: 'Goga'},
            {id: 2, name: 'Potya'},
            {id: 3, name: 'Vitya'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Masha'},
        ],
        messageData: [
            {id: 1, message: 'aaaaaaaaaaaaa'},
            {id: 2, message: 'bbbbbbbbbbbbb'},
            {id: 3, message: 'ccccccccccccc'},
        ]
    },
    sidebar: {id: 1}
}

export let addPost = (newPostMessage) => {
    let newPost = {
        id: 3,
        message: newPostMessage,
        likesCount: 0
    };

    state.profilePagePosts.push(newPost)
    reRenderUI(state);
}

export default state;
