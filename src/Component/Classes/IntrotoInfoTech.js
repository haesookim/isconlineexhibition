import React from "react";
import "./Classes.scss";

import background from "./2F_emptyroom.png";
import Mac from "./../MacElement";
import Poster from "./../PosterElement";

class IIT extends React.Component {
    render() {
        return (
            <div
                className="class"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
        );
    }
}

export default IIT;
