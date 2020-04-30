import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dialogs={props.appState.dialogPage.dialogData}
                           messages={props.appState.dialogPage.messageData}
                       />}/>
                <Route path='/profile' render={() => <Profile posts={props.appState.profilePage}/>}/>
            </div>
        </div>
    </BrowserRouter>
}

export default App;
