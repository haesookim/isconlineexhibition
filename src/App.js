import React from "react";
import logo from "./images/logo.png";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";

import TopNav from "./Container/TopNav/TopNav";
import About from "./Container/About/About";
import GuestBook from "./Container/GuestBook/Guestbook";
import Tour from "./Container/Tour/Tour";
import Interaction from "./Container/Interaction/Interaction";
import Event from "./Container/Event/Event";
import AssignmentList from "./Component/Assignment/AssignmentList";
import Assignment from "./Component/Assignment/Assignment";
import Popup from "./Container/Tour/Eventpopup";

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
                    <Switch>
                        <Route path="/about" exact component={About} />
                        <Route path="/tour" component={Tour} />
                        <Route path="/event" exact component={Event} />
                        <Route path="/guestbook" exact component={GuestBook} />
                        <Route path="/" exact component={About} />
                        {/* <Redirect exact to="/" /> */}
                    </Switch>
                </BrowserRouter>
                <BrowserRouter history={this.props.history}>
                    <Switch>
                        <Route
                            path="/interaction"
                            exact
                            component={Interaction}
                        />
                        <Route
                            path="/tour/:id/:id/list"
                            exact
                            component={AssignmentList}
                        />
                        <Route
                            path="/tour/:id/:id/list/:id"
                            exact
                            component={Assignment}
                        />
                        {/* <Redirect exact to="/" /> */}
                    </Switch>
                </BrowserRouter>
                {this.props.popup && <Popup></Popup>}
                <div id="overlay">
                    본 웹사이트는 데스크탑 전체화면 뷰에 최적화되어 있습니다.
                    <br />
                    컴퓨터로 접속하거나, 화면 가로를 늘려 주세요.
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        popup: state.event.popupVisible,
    };
};

export default connect(mapStateToProps, null)(App);
