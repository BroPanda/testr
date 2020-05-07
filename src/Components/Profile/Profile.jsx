import React from "react";
import css from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div className={css.profile}>
            <ProfileInfo/>
            <MyPosts
                profilePagePosts={props.profilePagePosts}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
            />
        </div>
    )
}

export default Profile;