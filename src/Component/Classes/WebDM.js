import React from "react";
import "./Classes.scss";

import { connect } from "react-redux";
import actionTypes from "../../store/actions/actionTypes";

import headphoneMac from "./../mac_headphone.png";
import crp from "./3f_lab_back.png";
import Mac from "./../MacElement";

import mirrorball from "./mirrorball.png";
class WebDM extends React.Component {
    state = {
        macs: [
            {
                key: 1,
                flipped: false,
                style: {
                    left: 54,
                    top: 219,
                },
            },
            {
                key: 2,
                flipped: false,
                style: {
                    left: 112,
                    top: 189,
                },
            },
            {
                key: 3,
                flipped: true,
                style: {
                    left: 382,
                    top: 179,
                },
            },
            // {
            //     key: 4,
            //     flipped: true,
            //     style: {
            //         left: 436,
            //         top: 209,
            //     },
            // },
        ],
    };

    onClickMirrorBall = () => {
        this.props.openPopup();
    };
    render() {
        const mac = this.state.macs.map((item) => {
            return (
                <Mac
                    history={this.props.history}
                    key={item.key}
                    isFlipped={item.flipped}
                    style={item.style}
                ></Mac>
            );
        });
        return (
            <div className="class" style={{ backgroundImage: `url(${crp})` }}>
                {mac}
                <Mac
                    history={this.props.history}
                    key={4}
                    isFlipped={true}
                    style={{
                        left: 436,
                        top: 209,
                        width: 58,
                        height: 58,
                        backgroundImage: `url(${headphoneMac})`,
                    }}
                ></Mac>
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

export default connect(null, mapDispatchToProps)(WebDM);
