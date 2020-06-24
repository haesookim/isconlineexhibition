import React from "react";
import "./Classes.scss";

import background from "./2F_emptyroom.png";
import Mac from "./../MacElement";

class IIT extends React.Component {
    state = {
        macs: [
            {
                key: 1,
                flipped: true,
                style: {
                    left: 226,
                    top: 343,
                },
            },
            {
                key: 2,
                flipped: true,
                style: {
                    left: 286,
                    top: 463,
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
            </div>
        );
    }
}

export default IIT;
