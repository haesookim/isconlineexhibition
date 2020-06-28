import React from "react";
import "./Classes.scss";

import { connect } from "react-redux";
import actionTypes from "../../store/actions/actionTypes";

import screen from "./../screen.png";
import crp from "./2f_cinema.png";

import minimi from "./../../images/minimi4.png";

import NPC from "../NPC";

class DVP extends React.Component {
    state = {};

    onClickScreen = () => {
        this.props.history.push(window.location.pathname + "/list/1");
        window.location.reload();
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
                        left: 404,
                        top: 94,
                        width: 186,
                        height: 200,
                        backgroundImage: `url(${screen})`,
                    }}
                    onClick={() => this.onClickScreen()}
                ></div>
                <NPC back={minimi} line="" top={294} left={614}></NPC>
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

export default connect(null, mapDispatchToProps)(DVP);
