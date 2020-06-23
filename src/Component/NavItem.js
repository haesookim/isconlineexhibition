import React from "react";

class NavItem extends React.Component {
    render() {
        return (
            <div
                className="nav-item"
                id={this.props.selected ? "selected" : ""}
                onClick={this.props.onClick}
            >
                {this.props.name}
            </div>
        );
    }
}

export default NavItem;
