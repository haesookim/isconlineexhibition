import React from "react";
import background from "./background_mac.png";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import { withRouter } from "react-router";

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
        assignmentList: [
            {
                title: "",
                authors: "",
                url: "",
                desc_m: "",
                desc_s: "",
                code: "",
            },
        ],
    };

    onClickPrev = () => {
        this.setState({ currentPage: this.state.currentPage - 1 });
    };

    onClickNext = () => {
        this.setState({ currentPage: this.state.currentPage + 1 });
    };

    onSelectAssignment = (item) => {
        // set store on selectedsubject
        this.props.getAssignmentInfo(
            this.props.selectedSubject,
            item.code.split("_")[1],
        );
    };

    componentDidMount = () => {
        // if (this.props.assignmentList.length === 0)
        this.props.getAssignments(window.location.pathname.split("/")[3]);
        //this.setState({ assignmentList: this.props.assignmentList });
    };

    render() {
        let pageCount = Math.ceil(this.props.assignmentList.length / 4);

        let itemstoDisplay = [];
        console.log(this.props.assignmentList);
        //let data = Array.from(this.state.assignmentList);
        if (this.props.assignmentList) {
            itemstoDisplay = this.props.assignmentList.map((item) => {
                if (
                    item.code.split("_")[1] >
                        (this.state.currentPage - 1) * 4 &&
                    item.code.split("_")[1] <= this.state.currentPage * 4
                ) {
                    return (
                        <div
                            className="assignment-item"
                            key={item.code}
                            onClick={() => this.onSelectAssignment(item)}
                        >
                            <div
                                className="background"
                                style={{
                                    backgroundImage:
                                        "url(" +
                                        "https://isc2020-1-test.herokuapp.com/image/" +
                                        window.location.pathname.split("/")[3] +
                                        "_" +
                                        item.code.split("_")[1],
                                }}
                            ></div>
                            <div className="overlay">
                                <div className="title">{item.title}</div>
                                <div className="members">{item.authors}</div>
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            });
        }

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
        selectedAssignment: state.assign.selectedAssignment,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAssignmentInfo: (sub, key) => {
            dispatch(actionCreators.getAssignment(sub.link, key));
        },
        getAssignments: (sub) => {
            dispatch(actionCreators.getAssignments(sub));
        },
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AssignmentList),
);
