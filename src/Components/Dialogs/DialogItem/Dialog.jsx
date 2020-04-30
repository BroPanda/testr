import {NavLink} from "react-router-dom";
import css from "../Dialogs.module.css";
import React from "react";

const Dialog = (props) => {
    let path = `/dialogs/${props.value.id}`;
    return (
        <div>
            <NavLink to={path} activeClassName={css.active}>{props.value.name}</NavLink>
        </div>
    )
}

export default Dialog;