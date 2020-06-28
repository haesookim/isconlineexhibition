import React from "react";
import { connect } from "react-redux";
import background from "./background_mac.png";
import * as actionCreators from "../../store/actions/index";
import {
    faTimes,
    faArrowAltCircleLeft,
    faHeart,
    faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Assignment.scss";

import notion from "./Notion_app_logo.png";
class Assignment extends React.Component {
    state = {
        likeCount: 0,
        liked: false,
        key: window.location.pathname.split("/")[5],
    };
    onClickClose = () => {
        this.props.history.push(
            "/tour/" +
                this.props.currentFloor +
                "/" +
                this.props.selectedSubject.link,
        );
        window.location.reload();
    };

    onClickBack = () => {
        this.props.history.push(
            "/tour/" +
                this.props.currentFloor +
                "/" +
                this.props.selectedSubject.link +
                "/list",
        );
        window.location.reload();
    };

    onClickLike = () => {
        if (!this.state.liked) {
            this.setState({ liked: true });
        }

        //also send +1 to server
    };
    render() {
        if (
            this.props.selectedAssignment === null ||
            this.props.selectedAssignment === undefined
        ) {
            this.props.getAssignmentInfo(
                this.props.selectedSubject.link,
                this.state.key,
            );
        }

        return (
            <div id="assignment">
                <div
                    id="pc"
                    style={{ backgroundImage: "url(" + background + ")" }}
                >
                    <div id="closebutton" onClick={() => this.onClickClose()}>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    </div>
                    <div id="container">
                        {!window.location.pathname.includes("DM") &&
                        !window.location.pathname.includes("DVP") ? (
                            <div
                                className="links"
                                id="back"
                                onClick={() => this.onClickBack()}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowAltCircleLeft}
                                ></FontAwesomeIcon>{" "}
                                뒤로 가기
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className="top">
                            <div id="assign-title">
                                {this.props.selectedAssignment.title}
                            </div>
                            <div id="assign-members">
                                {this.props.selectedAssignment.authors}
                            </div>
                        </div>
                        <img
                            className="assignment"
                            alt="과제 메인 이미지"
                            src={
                                "https://isc2020-1.herokuapp.com/image/" +
                                this.props.selectedSubject.link +
                                "_" +
                                this.state.key
                            }
                        ></img>
                        {/* <div
                            className="assignment"
                            alt="과제 메인 이미지"
                            style={{
                                backgroundImage:
                                    "url(" +
                                    "https://isc2020-1.herokuapp.com/image/CRP_1" +
                                    ")",
                            }}
                        ></div> */}
                        <div className="info">
                            <div className="title">과제 설명</div>
                            <div className="content">
                                {this.props.selectedAssignment.desc1}
                            </div>
                            <div className="title">과제 역학조사</div>
                            <div className="content">
                                {this.props.selectedAssignment.desc2}
                            </div>
                            <div id="links">
                                <div className="link">
                                    <img alt="notion logo" src={notion}></img>
                                    <a href={this.props.selectedAssignment.url}>
                                        과제 자세히 보기
                                    </a>
                                </div>
                                <div className="link">
                                    <FontAwesomeIcon
                                        icon={faShareAlt}
                                    ></FontAwesomeIcon>
                                    <a href="">공유하기</a>
                                </div>
                                <div
                                    className={
                                        this.state.liked ? "link liked" : "link"
                                    }
                                    id="like"
                                >
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        id="icon"
                                        onClick={() => this.onClickLike()}
                                    ></FontAwesomeIcon>
                                    <div></div>
                                </div>
                            </div>
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
        subjectList: state.assign.subjectList,
        selectedSubject: state.assign.selectedSubject,
        selectedAssignment: state.assign.selectedAssignment,
        //selectedImage:
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAssignmentInfo: (sub, key) => {
            dispatch(actionCreators.getAssignment(sub, key));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Assignment);
