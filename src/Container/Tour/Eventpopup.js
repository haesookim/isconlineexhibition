import React from "react";
import "./Eventpopup.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import actionTypes from "../../store/actions/actionTypes";
import { connect } from "react-redux";
import mirror from "./QRCode_mirrorball.jpg";
import dumbbell from "./QRCode_dumbbell.jpg";
import cat from "./../Event/box_cat.png";

class Popup extends React.Component {
    state = {
        count: 0,
        titleText: [
            "축하합니다!",
            "핸드폰으로 QR 코드를 스캔하여 상품을 받아가세요",
        ],
        title2ndLine: ["보물 상자를 찾으셨습니다", ""],
        extraText: ["상자를 눌러보세요!", ""],
    };
    onClickClose = () => {
        this.props.closePopup();
    };

    onClickBox = () => {
        this.setState({ count: 1 });
    };
    render() {
        return (
            <div id="popup-event">
                <div id="closebutton" onClick={() => this.onClickClose()}>
                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </div>
                <div id="eventbox">
                    <div className="title">
                        {this.state.titleText[this.state.count]}
                    </div>
                    <div className="title" id="thing">
                        {this.state.title2ndLine[this.state.count]}
                    </div>
                    <img
                        src={
                            this.state.count === 0
                                ? cat
                                : this.props.event === "mirrorball"
                                ? mirror
                                : dumbbell
                        }
                        alt="QRcode"
                        onClick={() => this.onClickBox()}
                    ></img>
                    <div>{this.state.extraText[this.state.count]}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { event: state.event.eventItem };
};
const mapDispatchToProps = (dispatch) => {
    return {
        closePopup: () => {
            dispatch({ type: actionTypes.CLOSE_POPUP });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Popup);
