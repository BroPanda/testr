import React from "react";
import css from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://booongo.com/media/public/uploads/2020/03/26/great_panda_poster_1280_ydjms.jpg"
                     alt=""/>
            </div>
            <div className={css.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo;