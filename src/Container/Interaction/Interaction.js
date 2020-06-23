import React from "react";

import "./Interaction.scss";
import infodesk from "./infodesk.png";

import minimi from "./minimi_prof.png";
import arrow from "./arrow.png";

class Interaction extends React.Component {
    state = { interactionNum: 0 };

    loadText = (count) => {};

    onClickSkip = () => {
        this.props.history.push("/tour");
        window.location.reload();
    };
    render() {
        return (
            <div
                id="interaction-overlay"
                style={{ backgroundImage: `url(${infodesk})` }}
            >
                <div id="dark">
                    <div id="textbox">
                        <div className="text">
                            2020년 1학기 서울대학교 정보문화학 연합전공 과제전에
                            오신 것을 환영합니다!
                        </div>
                        <img id="controller" src={arrow} />
                    </div>
                    <img id="npc" src={minimi} />
                    <div id="skip" onClick={this.onClickSkip}>
                        skip
                    </div>
                </div>
            </div>
        );
    }
}
export default Interaction;
