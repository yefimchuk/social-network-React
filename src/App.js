import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import News from "./Components/Content/News/News";
import Music from "./Components/Content/Music/Music";
import Settings from "./Components/Content/Settings/Settings";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";
import MessageContainer from "./Components/Content/Message/messageContainer";

const App = (props) => {

    return (
        <BrowserRouter>

            <div className='App'>
                <Header/>
                <Sidebar friendsData={props.state.sideBar.friendsData}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/message/:id" element={<MessageContainer store={props.store}/>}/>
                        <Route path="/profile" element={<ProfileContainer store={props.store}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
