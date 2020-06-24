import React from "react";

import "./Interaction.scss";
import infodesk from "./infodesk.png";

import minimi from "./minimi_prof.png";
import arrow from "./arrow.png";
import thermometer from "./thermometer.png";
import sanitizer from "./sanitizer.png";

class Interaction extends React.Component {
    state = {
        interactionNum: 0,
        currentText:
            "2020년 1학기 서울대학교 정보문화학 연합전공 과제전에오신 것을 환영합니다!",
    };

    textArray = [
        "과제전은 한 학기동안 정보문화학을 전공하는 학생들이 만든 과제를 전시해두는 공간입니다! 이번 학기는 코로나19로 인하여 온라인으로 진행하게 되었어요.",
        "그런데 잠시 실례할게요, 입장하시기 전에 체온 측정이 있겠습니다!",
        "Fantasti℃ , 정상체온이시네요!",
        "손 소독도 꼼꼼히 해 주세요. 아참, 과제전에 이벤트도 준비되어있다는 거 알고 계신가요?",
        "tour 탭 옆의 event탭을 눌러서 꼭 확인해 주세요!",
    ];
    loadText = (count) => {
        if (count == 5) {
            this.onClickSkip();
        }
        this.setState({
            currentText: this.textArray[count],
            interactionNum: count + 1,
        });
    };

    onClickSkip = () => {
        this.props.history.push("/tour/1F");
        window.location.reload();
    };
    render() {
        return (
            <div
                id="interaction-overlay"
                style={{ backgroundImage: `url(${infodesk})` }}
            >
                <div id="dark">
                    <img
                        id="interaction-image"
                        onClick={() => this.loadText(this.state.interactionNum)}
                        src={
                            this.state.interactionNum === 2
                                ? thermometer
                                : this.state.interactionNum === 4
                                ? sanitizer
                                : null
                        }
                    ></img>
                    <div id="textbox">
                        <div className="text">{this.state.currentText}</div>
                        <img
                            id="controller"
                            src={arrow}
                            onClick={() =>
                                this.loadText(this.state.interactionNum)
                            }
                        />
                    </div>
                    <img id="npc" src={minimi} />
                    <div id="skip" onClick={() => this.onClickSkip}>
                        skip
                    </div>
                </div>
            </div>
        );
    }
}
export default Interaction;
