import {reRenderUI} from "../render";

let state = {
    profilePagePosts: {
        posts: [
            {id: 1, message: `some post`, likesCount: 12},
            {id: 2, message: `some post`, likesCount: 11}
        ],
        newPostText: "type post"
    },
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

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePagePosts.newPostText,
        likesCount: 0
    };

    state.profilePagePosts.posts.push(newPost)
    state.profilePagePosts.newPostText = ``;
    reRenderUI(state);
}
export let updatePostText = (newText) => {
    state.profilePagePosts.newPostText = newText;
    reRenderUI(state);
}

export default state;
