import React from "react";
import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className={css.navbar}>
        <div><NavLink to='/profile' activeClassName={css.active}>Profile</NavLink></div>
        <div><NavLink to='/dialogs' activeClassName={css.active}>Messages</NavLink></div>
        <div><NavLink to='/news' activeClassName={css.active}>News</NavLink></div>
        <div><NavLink to='/music' activeClassName={css.active}>Music</NavLink></div>
        <div><NavLink to='/settings' activeClassName={css.active}>Settings</NavLink></div>
    </div>
}

export default Navbar;