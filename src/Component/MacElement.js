import React from "react";
import left from "./mac_left.png";
import right from "./mac_right.png";
import "./elementStyles.scss";
class MacElement extends React.Component {
    styleLeft = {
        backgroundImage: `url(${left})`,
    };
    styleRight = {
        backgroundImage: `url(${right})`,
    };
    loadAssignment = () => {
        this.props.history.push(window.location.pathname + "list");
    };
    render() {
        const style = this.props.isFlipped ? this.styleLeft : this.styleRight;
        return (
            <div
                style={Object.assign(style, this.props.style)}
                className="mac"
                onClick={() => this.loadAssignment}
            ></div>
        );
    }
}

export default MacElement;
