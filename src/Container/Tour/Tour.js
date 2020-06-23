import React from "react";
import { Router } from "react-router-dom";

class Tour extends React.Component {
    render() {
        return (
            <div id="mainTour">
                <div className="location">
                    <Router history={this.props.history}></Router>
                </div>

                <div id="carousel">
                    <div className="floor">3F</div>
                    <div className="floor">2F</div>
                    <div className="floor">1F</div>
                </div>
            </div>
        );
    }
}

export default Tour;
