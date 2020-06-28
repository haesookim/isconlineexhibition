import React from "react";
import "./About.scss";
import poster from "../../images/postergif.gif";

class About extends React.Component {
    onClickInteraction = () => {
        this.props.history.push("/interaction");
        window.location.reload();
    };
    onClickVisit = () => {
        this.props.history.push("/tour/3F/Dt4C");
        window.location.reload();
    };
    render() {
        return (
            <div id="aboutpage" className="main">
                <img id="main" src={poster} alt="포스터 gif"></img>
                <div className="bodytext">
                    놀랍게도 정문과제전은 정상영업중이랍니다.저희는 망하지
                    않았다구요. 물론 왼쪽 사진은 포스터 사진입니다. 온라인
                    과제전의 취지 설명, 과제전 컨셉 설명 등등등
                    <br /> <br />
                    made by. 팀플이 되어버린 과대진 + 랩조교 일동
                </div>
                <div id="buttondiv">
                    <button id="first" onClick={this.onClickInteraction}>
                        손님 맞이 ✦‿✦
                    </button>
                    <button id="second" onClick={this.onClickVisit}>
                        구경 시작 ٩( ᐛ )و
                    </button>
                </div>
            </div>
        );
    }
}

export default About;
