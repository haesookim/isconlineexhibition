import React from "react";

import "./Tour.scss";

class SidebarNav extends React.Component {
    render() {
        return (
            <div id="sidebar">
                <img alt="minimap"></img>
                <div>
                    <div>3층 수업 목록</div>
                    <hr></hr>
                    <div id="classList"></div>
                </div>
                <div id="classinfo">
                    <div className="title"></div>
                    <div className="description"></div>
                </div>
            </div>
        );
    }
}

export default SidebarNav;
