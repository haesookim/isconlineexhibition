import React from "react";
import "./Classes.scss";

import crp from "./2f_gamee.png";
import Mac from "./../MacElement";

class IGD extends React.Component {
    state = {
        macs: [
            {
                key: 1,
                flipped: false,
                style: {
                    left: 118,
                    top: 188,
                },
            },
            {
                key: 2,
                flipped: false,
                style: {
                    left: 170,
                    top: 162,
                },
            },
            {
                key: 3,
                flipped: true,
                style: {
                    left: 388,
                    top: 182,
                },
            },
            {
                key: 4,
                flipped: true,
                style: {
                    left: 472,
                    top: 224,
                },
            },
            {
                key: 5,
                flipped: true,
                style: {
                    left: 524,
                    top: 250,
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

export default IGD;
