import React from "react";
import "./Classes.scss";

import crp from "./3f_lab_front.png";
import Mac from "./../MacElement";

class Dt4C extends React.Component {
    state = {
        macs: [
            {
                key: 1,
                flipped: false,
                style: {
                    left: 188,
                    top: 224,
                },
            },
            {
                key: 2,
                flipped: false,
                style: {
                    left: 242,
                    top: 196,
                },
            },
            {
                key: 3,
                flipped: true,
                style: {
                    left: 404,
                    top: 218,
                },
            },
            {
                key: 4,
                flipped: true,
                style: {
                    left: 458,
                    top: 244,
                },
            },
            {
                key: 5,
                flipped: true,
                style: {
                    left: 530,
                    top: 276,
                },
            },
            {
                key: 6,
                flipped: true,
                style: {
                    left: 584,
                    top: 304,
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

export default Dt4C;
