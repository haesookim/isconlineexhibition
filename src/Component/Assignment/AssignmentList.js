import React from "react";
import background from "./background_mac.png";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Assignment.scss";

class AssignmentList extends React.Component {
    onClickClose = () => {
        this.props.history.push(window.location.pathname.replace("/list", ""));
        window.location.reload();
    };
    render() {
        return (
            <div id="assignment">
                <div id="closebutton" onClick={() => this.onClickClose()}>
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </div>
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
