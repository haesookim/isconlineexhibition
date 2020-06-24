import React from "react";
import { Route, Switch, Router, Redirect } from "react-router-dom";

import CRP from "./../../Component/Classes/CRP";
import HCI from "./../../Component/Classes/HCI";
import IIT from "../../Component/Classes/IntrotoInfoTech";
import Datavis from "../../Component/Classes/DataVis";
import IGD from "../../Component/Classes/IGD";
import WebDM from "../../Component/Classes/WebDM";
import Dt4C from "../../Component/Classes/Dt4C";

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
                            <Route path="/tour/1F/HCI" component={HCI} />
                            <Route path="/tour/2F/IIT" component={IIT} />
                            <Route path="/tour/2F/IGD" component={IGD} />
                            <Route
                                path="/tour/2F/Dataviz"
                                component={Datavis}
                            />
                            {/* <Route path="/tour/2F/Cinema" component={Cinema} /> */}
                            <Route path="/tour/3F/Dt4C" component={Dt4C} />
                            <Route path="/tour/3F/WebDM" component={WebDM} />
                            <Redirect path="/tour/1F" to="/tour/1F/CRP" />
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
