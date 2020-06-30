import React from "react";
import { connect } from "react-redux";
import background from "./background_mac.png";
import * as actionCreators from "../../store/actions/index";
import {
    faTimes,
    faArrowAltCircleLeft,
    faHeart,
    // faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Assignment.scss";

import DI from "./DVW_1.png";

import notion from "./Notion_app_logo.png";
class Assignment extends React.Component {
    state = {
        likeCount: 0,
        liked: false,
        key: window.location.pathname.split("/")[5],
        item: { title: "", authors: "", url: "", desc_m: "", desc_s: "" },
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

    componentDidMount = () => {
        if (window.location.pathname.includes("DI")) {
            this.setState({
                item: {
                    title: "코로나 시대의 영상 걸작선",
                    authors: "디지털영상실습 수강생",
                    url:
                        "https://www.notion.so/17a16f7668a44f13907c55a02d5dab31",
                    desc_m:
                        "요즘은 영상콘텐츠의 시대! 학생들의 개성이 톡톡 튀는 영상들을 보고가세요!",
                    desc_s: "공개해주셔서 감사해요 모두들!",
                },
            });
        } else {
            this.props.getAssignmentInfo(
                window.location.pathname.split("/")[3],
                window.location.pathname.split("/")[5],
            );
        }
    };

    componentDidUpdate = (prevProps) => {
        if (this.props !== prevProps)
            this.setState({ item: this.props.selectedAssignment });
    };

    render() {
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
                        !window.location.pathname.includes("DI") ? (
                            <div
                                className="links"
                                id="back"
                                onClick={() => this.onClickBack()}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowAltCircleLeft}
                                ></FontAwesomeIcon>
                                뒤로 가기
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className="top">
                            <div id="assign-title">{this.state.item.title}</div>
                            <div id="assign-members">
                                {this.state.item.authors}
                            </div>
                        </div>
                        {!window.location.pathname.includes("DM") ? (
                            !window.location.pathname.includes("DI") ? (
                                <img
                                    className="assignment"
                                    alt="과제 메인 이미지"
                                    src={
                                        "https://isc2020-1-test.herokuapp.com/image/" +
                                        this.props.selectedSubject.link +
                                        "_" +
                                        this.state.key
                                    }
                                ></img>
                            ) : (
                                <img
                                    className="assignment"
                                    alt="과제 메인 이미지"
                                    src={DI}
                                ></img>
                            )
                        ) : (
                            <img
                                className="assignment"
                                alt="과제 메인 이미지"
                                src={
                                    "https://isc2020-1-test.herokuapp.com/image/" +
                                    this.props.selectedSubject.link +
                                    "_" +
                                    1
                                }
                            ></img>
                        )}

                        <div className="info">
                            <div className="title">과제 설명</div>
                            <div className="content">
                                {this.state.item.desc_m}
                            </div>
                            <div className="title">과제 역학조사</div>
                            <div className="content">
                                {this.state.item.desc_s}
                            </div>
                            <div id="links">
                                <div className="link">
                                    <img alt="notion logo" src={notion}></img>
                                    <a
                                        href={
                                            this.state.item.url.includes("http")
                                                ? this.state.item.url
                                                : "https://" +
                                                  this.state.item.url
                                        }
                                        target="blank"
                                    >
                                        과제 자세히 보기
                                    </a>
                                </div>
                                {/* <div className="link">
                                    <FontAwesomeIcon
                                        icon={faShareAlt}
                                    ></FontAwesomeIcon>
                                    <a href="">공유하기</a>
                                </div> */}
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
