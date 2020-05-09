import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";

let RenderUI = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    appState={store.getState()}
                    dispatch = {store.dispatch.bind(store)}

                />
            </React.StrictMode>
        </BrowserRouter>,

        document.getElementById('root')
    )
}

RenderUI();

store.subscribe(RenderUI);