import React from "react";
import "./Classes.scss";

import crp from "./1f_glassroom.png";
import Mac from "./../MacElement";
import Poster from "./../PosterElement";

class CRP extends React.Component {
    state = {
        macs: [
            {
                key: 1,
                flipped: false,
                style: {
                    left: 140,
                    top: 242,
                },
            },
            {
                key: 2,
                flipped: false,
                style: {
                    left: 192,
                    top: 216,
                },
            },
            {
                key: 3,
                flipped: true,
                style: {
                    left: 492,
                    top: 260,
                },
            },
            {
                key: 4,
                flipped: true,
                style: {
                    left: 544,
                    top: 286,
                },
            },
        ],
    };
    render() {
        const mac = this.state.macs.map((item) => {
            return (
                <Mac
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

export default CRP;
