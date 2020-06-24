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
        //let history = useHistory();
        //history.push(window.location.pathname + "list");
    };
    render() {
        return (
            <div
                style={this.props.isFlipped ? this.styleLeft : this.styleRight}
                className="mac"
                onClick={this.loadAssignment}
            ></div>
        );
    }
}

export default MacElement;