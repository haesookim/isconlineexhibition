import React from "react";
import logo from "./images/logo.png";
//import { Route, Redirect, Switch } from "react-router-dom";
import "./App.scss";

import TopNav from "./Container/TopNav/TopNav";
import About from "./Container/About/About";
import GuestBook from "./Container/GuestBook/Guestbook";

function App() {
    return (
        <div className="App">
            <div id="logo" style={{ backgroundImage: `url(${logo})` }}></div>
            <TopNav></TopNav>
            {/* <About /> */}
            <GuestBook></GuestBook>
            <div id="overlay">
                본 웹사이트는 데스크탑 전체화면 뷰에 최적화되어 있습니다.
                <br />
                컴퓨터로 접속하거나, 화면 가로를 늘려 주세요.
            </div>
        </div>
    );
}

export default App;
