import React from "react";
import "./Classes.scss";

import { connect } from "react-redux";
import actionTypes from "../../store/actions/actionTypes";

import background from "./2F_emptyroom.png";
import Mac from "./../MacElement";
import dumbbell from "./dumbbell.png";
import minimi from "./../../images/minimi2.png";

import NPC from "../NPC";

class IIT extends React.Component {
    state = {
        macs: [
            {
                key: 1,
                flipped: true,
                style: {
                    left: 343,
                    top: 226,
                },
            },
            {
                key: 2,
                flipped: true,
                style: {
                    left: 463,
                    top: 286,
                },
            },
        ],
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
            <div
                className="class"
                style={{ backgroundImage: `url(${background})` }}
            >
                {mac}
                <div
                    className="event"
                    id="dumbbell"
                    style={{
                        backgroundImage: `url(${dumbbell})`,
                        width: 126,
                        height: 66,
                        position: "absolute",
                        top: 322,
                        left: 131,
                    }}
                    onClick={() => this.props.openPopup()}
                ></div>
                <NPC back={minimi} line="" top={322} left={266}></NPC>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openPopup: () => {
            dispatch({
                type: actionTypes.ACTIVATE_POPUP,
                event: "dumbbell",
            });
        },
    };
};

export default connect(null, mapDispatchToProps)(IIT);
