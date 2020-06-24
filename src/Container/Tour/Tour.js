import React from "react";
import { Route, Switch, Router } from "react-router-dom";

import CRP from "./../../Component/Classes/CRP";
import IIT from "../../Component/Classes/IntrotoInfoTech";

class Tour extends React.Component {
    onClickFloor = (floorText) => {
        this.props.history.push("/tour/" + floorText);
    };

    render() {
        return (
            <div id="mainTour">
                <div className="location">
                    <Router history={this.props.history}>
                        <Switch>
                            <Route path="/tour/1F/CRP" component={CRP} />
                            <Route path="/tour/2F/IIT" component={IIT} />
                            <Route path="/tour/1F" component={CRP} />
                        </Switch>
                    </Router>
                </div>

                <div id="carousel">
                    <div
                        className={
                            window.location.pathname.includes("3F")
                                ? "selected floor"
                                : "floor"
                        }
                        onClick={() => this.onClickFloor("3F")}
                    >
                        3F
                    </div>
                    <div
                        className={
                            window.location.pathname.includes("2F")
                                ? "selected floor"
                                : "floor"
                        }
                        onClick={() => this.onClickFloor("2F")}
                    >
                        2F
                    </div>
                    <div
                        className={
                            window.location.pathname.includes("1F")
                                ? "selected floor"
                                : "floor"
                        }
                        onClick={() => this.onClickFloor("1F")}
                    >
                        1F
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;
