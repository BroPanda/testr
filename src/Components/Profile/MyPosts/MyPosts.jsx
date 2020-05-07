import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let {posts, newPostText} = props.profilePagePosts;
    const newPostElement = React.createRef();
    const clickAddPost = () => {
        props.addPost();
    };
    let postDataElements = posts.map(el => <Post value={el}/>);
    let onPostChange = () => {
        let text = newPostElement.current.value
        console.log(text);
        props.updatePostText(text)
    }

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