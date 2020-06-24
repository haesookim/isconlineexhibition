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
import AssignmentList from "./Component/Assignment/AssignmentList";
import Assignment from "./Component/Assignment/Assignment";

class App extends React.Component {
    onClickLogo = () => {
        this.props.history.push("/");
        window.location.reload();
    };

    render() {
        return (
            <div className="App">
                <div id="temp"></div>
            </div>
        );
    }
}

export default App;
