import React from "react";
import { connect } from "react-redux";
import background from "./background_mac.png";
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
                        <div className="top">
                            <div id="assign-title">과제 제목</div>
                            <div id="assign-members">
                                팀원, 팀원, 팀원, 팀원
                            </div>
                        </div>
                        <img
                            className="assignment"
                            alt="과제 메인 이미지"
                        ></img>
                        <div className="info">
                            <div className="title">과제 설명</div>
                            <div className="content">과제 설명</div>
                            <div className="title">과제 역학조사</div>
                            <div className="content">과제 설명</div>
                            <div id="links">
                                <div className="link">
                                    <img alt="notion logo" src={notion}></img>
                                    <a href="">과제 자세히 보기</a>
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
    };
};

export default connect(mapStateToProps)(Assignment);
