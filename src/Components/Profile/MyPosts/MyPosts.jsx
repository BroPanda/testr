import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postDataElements = props.posts.map(el => <Post value={el}/>)
    return (
        <div className={css.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            <div>
                {postDataElements}
            </div>
        </div>
    )
}

export default MyPosts;