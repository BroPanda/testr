import React from "react";

const Post = (props) => {
    return(
        <div>
            <div>post message - <p>"{props.value.message}"</p> </div>
            <div>likes - "{props.value.likesCount}"</div>
            <hr/>
        </div>
    )
}

export default Post