import React from "react";
import "./Classes.scss";

import crp from "./1f_classroom.png";
import Mac from "./../MacElement";

class HCI extends React.Component {
    state = {
        macs: [
            {
                key: 1,
                flipped: true,
                style: {
                    left: 308,
                    top: 162,
                },
            },
            {
                key: 2,
                flipped: true,
                style: {
                    left: 360,
                    top: 188,
                },
            },
            {
                key: 3,
                flipped: true,
                style: {
                    left: 450,
                    top: 236,
                },
            },
            {
                key: 4,
                flipped: true,
                style: {
                    left: 502,
                    top: 262,
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

export default HCI;
