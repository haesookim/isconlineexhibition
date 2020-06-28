import React from "react";
import "./elementStyles.scss";
class NPC extends React.Component {
    state = {
        lineActive: false,
        line: "",
    };

    activateConvo = (line) => {
        this.setState({ lineActive: !this.state.lineActive, line: line });
    };

    render() {
        let style = {
            backgroundImage: `url(${this.props.back})`,
        };

        let parentStyle = {
            top: this.props.top,
            left: this.props.left,
        };

        return (
            <div id="npc-wrapper" style={parentStyle}>
                <div
                    style={style}
                    className="npc"
                    onClick={() => this.activateConvo(this.props.line)}
                ></div>
                {this.state.lineActive && (
                    <div id="npcLine">{this.state.line}</div>
                )}
            </div>
        );
    }
}

export default NPC;
