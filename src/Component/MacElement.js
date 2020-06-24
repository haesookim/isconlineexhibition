import React from "react";
import left from "./mac_left.png";
import right from "./mac_right.png";
import "./elementStyles.scss";
class MacElement extends React.Component {
    loadAssignment = () => {
        this.props.history.push(window.location.pathname + "/list");
        window.location.reload();
    };
    render() {
        let styleLeft = {
            backgroundImage: `url(${left})`,
        };
        let styleRight = {
            backgroundImage: `url(${right})`,
        };
        const style = this.props.isFlipped ? styleLeft : styleRight;
        return (
            <div
                style={Object.assign(style, this.props.style)}
                className="mac"
                onClick={() => this.loadAssignment()}
            ></div>
        );
    }
}

export default MacElement;
