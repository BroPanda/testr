const ADD_POST = `ADD-POST`;
const UPDATE_POST_TEXT = `UPDATE-POST-TEXT`;

let store = {
    _state: {
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
    },
    getState(){
        return this._state;
    },
    subscribe(RenderUI){
        this._reRenderUI = RenderUI;
    },
    _reRenderUI() {
        console.log((`state change`));
    },

    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: 3,
                message: this._state.profilePagePosts.newPostText,
                likesCount: 0
            };

            this._state.profilePagePosts.posts.push(newPost)
            this._state.profilePagePosts.newPostText = ``;
            this._reRenderUI();
        }
        else if (action.type === UPDATE_POST_TEXT){
            this._state.profilePagePosts.newPostText = action.newText;
            this._reRenderUI();
        }
    }
}
export const addPostAC = () => ({ type: ADD_POST })
export const onPostChangeAC = (text) => {
    return {type: UPDATE_POST_TEXT, newText: text}
}

window.store = store;
export default store;