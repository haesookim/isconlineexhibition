import React from "react";
import background from "./background_mac.png";

import "./Assignment.scss";

class AssignmentList extends React.Component {
    render() {
        return (
            <div id="assignment">
                <div id="closebutton"></div>
                <div
                    id="pc"
                    style={{ backgroundImage: "url(" + background + ")" }}
                >
                    <div id="list">
                        <div className="assignment-item">
                            <div className="title">과제 이름</div>
                            <div className="members">팀원 이름</div>
                        </div>
                        <div className="assignment-item"></div>
                        <div className="assignment-item"></div>
                        <div className="assignment-item"></div>
                    </div>
                    <div id="controls"></div>
                </div>
            </div>
        );
    }
}

export default AssignmentList;
