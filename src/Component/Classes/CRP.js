import React from "react";
import "./Classes.scss";

import crp from "./1f_glassroom.png";
import Mac from "./../MacElement";
import Poster from "./../PosterElement";

class CRP extends React.Component {
    render() {
        return (
            <div className="class" style={{ backgroundImage: `url(${crp})` }}>
                <Mac></Mac>
            </div>
        );
    }
}

export default CRP;
