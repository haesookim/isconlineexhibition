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
                    안녕하세요!{" "}
                    <a href="http://isc.snu.ac.kr/" target="blank">
                        서울대학교 연합전공 정보문화학
                    </a>{" "}
                    온라인 과제전에 오신 것을 환영합니다.
                    <br /> <br />
                    매 학기 말 IBK 커뮤니케이션 센터에서 진행하던 과제물 전시를
                    온라인 형태로 바꾸어 선보이게 되었습니다. 사회적 거리두기로
                    황량해진 캠퍼스 가운데....정문 과제전은 정상영업중입니다!
                    <br /> <br />
                    다양한 전공과 배경을 가지고 모인 학생들이 정보문화학
                    수업에서 IT 기술을 만나 현실화한 아이디어들을 각자의 집에서
                    모니터로 둘러보고 색다른 영감을 얻을 수 있는 기회가 되길
                    바랍니다.
                    <br /> <br />
                    2020-1학기 연합전공 정보문화학 과대진 및 랩조교 일동
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
