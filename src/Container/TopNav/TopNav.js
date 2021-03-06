import React from "react";
import "./TopNav.scss";

import NavItem from "../../Component/NavItem";

class TopNav extends React.Component {
    onClickNav = (link) => {
        this.props.history.push("/" + link);
        window.location.reload();
    };

    render() {
        return (
            <div id="topnav">
                <NavItem
                    name="about"
                    onClick={() => this.onClickNav("about")}
                    selected={
                        window.location.pathname === "/about" ||
                        window.location.pathname === "/"
                    }
                />
                <NavItem
                    name="tour"
                    onClick={() => this.onClickNav("tour/3F/Dt4C")}
                    selected={window.location.pathname.includes("/tour")}
                />
                <NavItem
                    name="event"
                    onClick={() => this.onClickNav("event")}
                    selected={window.location.pathname === "/event"}
                />
                {/* <NavItem
                    name="guestbook"
                    onClick={() => this.onClickNav("guestbook")}
                    selected={window.location.pathname === "/guestbook"}
                /> */}
            </div>
        );
    }
}

export default TopNav;
