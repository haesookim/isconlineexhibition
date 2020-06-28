import React from "react";
import logo from "./images/logo.png";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import "./App.scss";
import { connect } from "react-redux";

import redir from "./web_view.jpg";

import TopNav from "./Container/TopNav/TopNav";
import About from "./Container/About/About";
import GuestBook from "./Container/GuestBook/Guestbook";
import Tour from "./Container/Tour/Tour";
import Interaction from "./Container/Interaction/Interaction";
import Event from "./Container/Event/Event";
import AssignmentList from "./Component/Assignment/AssignmentList";
import Assignment from "./Component/Assignment/Assignment";
import Popup from "./Container/Tour/Eventpopup";
import FAB from "./Container/Tour/FAB";

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
                <ConnectedRouter history={this.props.history}>
                    <Switch>
                        <Route path="/about" exact component={About} />
                        <Route path="/tour" component={Tour} />
                        <Route path="/event" exact component={Event} />
                        {/* <Route path="/guestbook" exact component={GuestBook} /> */}
                        <Route path="/" exact component={About} />
                        {/* <Redirect exact to="/" /> */}
                    </Switch>
                </ConnectedRouter>
                <ConnectedRouter history={this.props.history}>
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
                </ConnectedRouter>
                {this.props.popup && <Popup></Popup>}
                {this.props.fab && <FAB></FAB>}
                <div
                    id="overlay"
                    style={{ backgroundImage: "url(" + redir + ")" }}
                ></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        popup: state.event.popupVisible,
        fab: state.fab.popupVisible,
    };
};

export default connect(mapStateToProps, null)(App);
