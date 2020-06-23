import React from "react";
import background from "./background_mac.png";

import "./Assignment.scss";

class Assignment extends React.Component {
    render() {
        return (
            <div id="assignment">
                <div id="closebutton"></div>
                <div
                    id="pc"
                    style={{ backgroundImage: "url(" + background + ")" }}
                >
                    <div id="container">
                        <div className="top">
                            <div id="assign-title">과제 제목</div>
                            <div id="assign-members">
                                팀원, 팀원, 팀원, 팀원
                            </div>
                        </div>
                        <img className="assignment"></img>
                        <div className="info">
                            <div className="title">과제 설명</div>
                            <div className="content">과제 설명</div>
                            <div className="title">과제 역학조사</div>
                            <div className="content">과제 설명</div>
                            <div id="links">
                                <div className="link">
                                    <img></img>
                                    <a>과제 자세히 보기</a>
                                </div>
                                <div className="link">
                                    <img></img>
                                    <a>공유하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Assignment;
