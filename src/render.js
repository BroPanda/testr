import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updatePostText} from "./redux/state";


export let reRenderUI = (props) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    appState={props}
                    addPost={addPost}
                    updatePostText={updatePostText}
                />
            </React.StrictMode>
        </BrowserRouter>,

        document.getElementById('root')
    )
}