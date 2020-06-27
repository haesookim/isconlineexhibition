import React from "react";

import "./FAB.scss";

import { connect } from "react-redux";
import actionTypes from "../../store/actions/actionTypes";

import {
    faTimes,
    faShareAlt,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FAB extends React.Component {
    onClickShare = () => {};
    render() {
        return (
            <div id="popup">
                <div id="wrapper">
                    <div className="icon-wrapper">
                        <div className="text">정문에게 물어보기</div>
                        <a
                            className="fab-icon"
                            href="https://forms.gle/mUbKwhPdDH6Wuis88"
                            target="blank"
                        >
                            <FontAwesomeIcon
                                icon={faQuestion}
                            ></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="icon-wrapper">
                        <div className="text">공유하기</div>
                        <div className="fab-icon">
                            <FontAwesomeIcon
                                icon={faShareAlt}
                                onClick={() => this.onClickShare()}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="icon-wrapper">
                        <div className="fab-icon">
                            <FontAwesomeIcon
                                icon={faTimes}
                                onClick={() => this.props.closeFAB()}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeFAB: () => {
            dispatch({ type: actionTypes.CLOSE_MENU });
        },
    };
};

export default connect(null, mapDispatchToProps)(FAB);
