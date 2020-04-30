import React from "react";
import css from './Header.module.css'


const Header = () => {
    return <div className={css.header}>
        <div className={css.imgH}>
            <img src="https://img3.akspic.ru/image/145848-kosmos-privlekatelnost-kavajnaya-multfilm-nebo-3840x2160.jpg"
                 alt=""/>
        </div>
        <div className={css.menu}></div>
    </div>

}

export default Header;