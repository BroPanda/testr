import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, onPostChangeAC} from "../../../redux/state";

const MyPosts = (props) => {
    let {posts, newPostText} = props.profilePagePosts;
    const newPostElement = React.createRef();
    let postDataElements = posts.map(el => <Post value={el}/>);

    const clickAddPost = () => {
        props.dispatch(addPostAC())
    };
    let onPostChange = () => {
        let text = newPostElement.current.value
        console.log(text);
        props.dispatch(onPostChangeAC(text))}

    return (
        <div className={css.postBlock}>
            <div><h3>My posts</h3></div>
            <div><textarea
                onChange={onPostChange}
                ref={newPostElement}
                value={newPostText}/></div>
            <button onClick={clickAddPost}>add post</button>
            <div>{postDataElements}</div>
        </div>
    )
}

export default MyPosts;