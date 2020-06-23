import React from "react";
import logo from "./images/logo.png";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.scss";

import TopNav from "./Container/TopNav/TopNav";
import About from "./Container/About/About";
import GuestBook from "./Container/GuestBook/Guestbook";
import Tour from "./Container/Tour/Tour";
import SidebarNav from "./Container/Tour/SidebarNav";
import Interaction from "./Container/Interaction/Interaction";
import Event from "./Container/Event/Event";
import Assignment from "./Component/Assignment/Assignment";

class App extends React.Component {
    onClickLogo = () => {
        this.props.history.push("/");
        window.location.reload();
    };

    render() {
        return (
            <div className="App">
                <div
                    id="logo"
                    onClick={() => this.onClickLogo()}
                    style={{ backgroundImage: `url(${logo})` }}
                ></div>
                <TopNav history={this.props.history}></TopNav>
                <BrowserRouter history={this.props.history}>
                    <Route path="/tour/:id" exact component={SidebarNav} />
                </BrowserRouter>
                <BrowserRouter history={this.props.history}>
                    <Switch>
                        <Route path="/about" exact component={About} />
                        <Route path="/tour/:id" exact component={Tour} />
                        <Route path="/event" exact component={Event} />
                        <Route path="/guestbook" exact component={GuestBook} />
                        <Route path="/" exact component={About} />
                    </Switch>
                </BrowserRouter>
                <BrowserRouter history={this.props.history}>
                    <Route path="/interaction" exact component={Interaction} />
                </BrowserRouter>
                <div id="overlay">
                    본 웹사이트는 데스크탑 전체화면 뷰에 최적화되어 있습니다.
                    <br />
                    컴퓨터로 접속하거나, 화면 가로를 늘려 주세요.
                </div>
            </div>
        );
    }
}

export default App;
