import React from "react";
import "./TopNav.scss";

import NavItem from "../../Component/NavItem";

class TopNav extends React.Component {
    render() {
        return (
            <div id="topnav">
                <NavItem name="about" selected={true} />
                <NavItem name="tour" />
                <NavItem name="event" />
                <NavItem name="guestbook" />
            </div>
        );
    }
}

export default TopNav;
