import React from "react";
import css from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://image.freepik.com/free-photo/panorama-clearly-milky-way-galaxy-with-stars-space-dust-universe_33900-97.jpg"
                     alt=""/>
            </div>
            <div className={css.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo;