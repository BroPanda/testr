import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {
    return <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div>
            <Route path='/dialogs'
                   render={() => <Dialogs
                       dialogs={props.appState.dialogPage.dialogData}
                       messages={props.appState.dialogPage.messageData}
                   />}/>
            <Route path='/profile'
                   render={() => <Profile
                       profilePagePosts={props.appState.profilePagePosts}
                       addPost={props.addPost}
                       updatePostText={props.updatePostText}
                   />}/>

        </div>
    </div>
}

export default App;
