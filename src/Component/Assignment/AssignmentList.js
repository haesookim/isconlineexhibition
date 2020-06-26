import React from "react";
import background from "./background_mac.png";
import { connect } from "react-redux";
import {
    faTimes,
    faCaretLeft,
    faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Assignment.scss";

class AssignmentList extends React.Component {
    onClickClose = () => {
        this.props.history.push(window.location.pathname.replace("/list", ""));
        window.location.reload();
    };
    state = {
        currentPage: 1,
    };

    onClickPrev = () => {
        this.setState({ currentPage: this.state.currentPage - 1 });
    };

    onClickNext = () => {
        this.setState({ currentPage: this.state.currentPage + 1 });
    };

    onSelectAssignment = (item) => {
        // set store on selectedsubject
        this.props.history.push(window.location.pathname + "/" + item.index);
    };
    render() {
        let pageCount = Math.floor(this.props.assignmentList.length / 4) + 1;

        let itemstoDisplay = this.props.assignmentList.map((item) => {
            if (
                item.index > (this.state.currentPage - 1) * 4 &&
                item.index <= this.state.currentPage * 4
            ) {
                return (
                    <div
                        className="assignment-item"
                        key={item.index}
                        onClick={() => this.onSelectAssignment(item)}
                    >
                        <div className="title">{item.title}</div>
                        <div className="members">{item.members}</div>
                    </div>
                );
            }
        });
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
                        {itemstoDisplay}
                        {/* <div className="assignment-item">
                            <div className="title">과제 이름</div>
                            <div className="members">팀원 이름</div>
                        </div>
                        <div className="assignment-item"></div>
                        <div className="assignment-item"></div>
                        <div className="assignment-item"></div> */}
                        <div id="controls">
                            {this.state.currentPage !== 1 && (
                                <div
                                    className="button"
                                    onClick={() => this.onClickPrev()}
                                >
                                    <FontAwesomeIcon
                                        icon={faCaretLeft}
                                    ></FontAwesomeIcon>
                                </div>
                            )}
                            {this.state.currentPage + "/" + pageCount}
                            {this.state.currentPage !== pageCount && (
                                <div
                                    className="button"
                                    onClick={() => this.onClickNext()}
                                >
                                    <FontAwesomeIcon
                                        icon={faCaretRight}
                                    ></FontAwesomeIcon>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentFloor: state.assign.currentFloor,
        selectedSubject: state.assign.selectedSubject,
        assignmentList: state.assign.assignmentList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList);
