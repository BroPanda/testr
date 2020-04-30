import React from "react";
import css from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./DialogItem/Dialog";

const Dialogs = (props) => {
    let messageElements = props.messages.map(m => <Message value={m}/>)
    let dialogElements = props.dialogs.map(d => <Dialog value={d}/>)

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}> {dialogElements} </div>
            <div className={css.messages}> {messageElements} </div>
        </div>
    )
}

export default Dialogs;