import React from "react";
import "./Classes.scss";

import crp from "./3f_lab_back.png";
import Mac from "./../MacElement";

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
            {
                key: 4,
                flipped: true,
                style: {
                    left: 436,
                    top: 209,
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
            <div className="class" style={{ backgroundImage: `url(${crp})` }}>
                {mac}
            </div>
        );
    }
}

export default WebDM;
