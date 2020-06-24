import React from "react";
import left from "./poster_y_left.png";
import right from "./poster_y_right.png";
import "./elementStyles.scss";

class PosterElement extends React.Component {
    styleLeft = {
        backgroundImage: `url(${left})`,
    };
    styleRight = {
        backgroundImage: `url(${right})`,
    };
    render() {
        return (
            <div
                className="poster"
                style={this.props.isFlipped ? this.styleLeft : this.styleRight}
            ></div>
        );
    }
}

export default PosterElement;
