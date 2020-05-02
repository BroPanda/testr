import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const newPostElement = React.createRef();

    const clickAddPost = () => {
        let text = newPostElement.current.value
        props.addPost(text);
    };

    let postDataElements = props.posts.map(el => <Post value={el}/>);

    return (
        <div className={css.postBlock}>
            <div><h3>My posts</h3></div>
            <div><textarea ref={newPostElement}></textarea></div>
            <button onClick={clickAddPost}>add post</button>
            <div>{postDataElements}</div>
        </div>
    )
}

export default MyPosts;