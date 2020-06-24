import React from "react";
import "./Classes.scss";

import crp from "./2F_hall1.png";
import Mac from "./../MacElement";

class DataVis extends React.Component {
    state = {
        macs: [
            {
                key: 1,
                flipped: true,
                style: {
                    left: 194,
                    top: 161,
                },
            },
            {
                key: 2,
                flipped: true,
                style: {
                    left: 246,
                    top: 187,
                },
            },
            {
                key: 3,
                flipped: true,
                style: {
                    left: 325,
                    top: 228,
                },
            },
            {
                key: 4,
                flipped: true,
                style: {
                    left: 378,
                    top: 255,
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

export default DataVis;
