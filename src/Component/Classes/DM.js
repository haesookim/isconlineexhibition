import React from "react";
import "./Classes.scss";

import { connect } from "react-redux";
import actionTypes from "../../store/actions/actionTypes";

import headphoneMac from "./../mac_headphone.png";
import crp from "./3f_lab_back_DM.png";
// import Mac from "../MacElement";

import mirrorball from "./mirrorball.png";
class DM extends React.Component {
    state = {};
    onClickMac = () => {
        this.props.history.push(window.location.pathname + "/list/0");
        window.location.reload();
    };

    onClickMirrorBall = () => {
        this.props.openPopup();
    };
    render() {
        return (
            <div className="class" style={{ backgroundImage: `url(${crp})` }}>
                <div
                    history={this.props.history}
                    key={4}
                    isFlipped={true}
                    style={{
                        position: "absolute",
                        left: 436,
                        top: 209,
                        width: 58,
                        height: 58,
                        backgroundImage: `url(${headphoneMac})`,
                        cursor: "pointer",
                    }}
                    onClick={() => this.onClickMac()}
                ></div>
                <div
                    className="event"
                    id="mirrorball"
                    style={{
                        backgroundImage: `url(${mirrorball})`,
                        width: 78,
                        height: 114,
                        position: "absolute",
                        top: 37,
                        left: 307,
                    }}
                    onClick={() => this.onClickMirrorBall()}
                ></div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openPopup: () => {
            dispatch({
                type: actionTypes.ACTIVATE_POPUP,
                event: "mirrorball",
            });
        },
    };
};

export default connect(null, mapDispatchToProps)(DM);
