import React from "react";

class GuestNote extends React.Component {
    render() {
        return (
            <div className="note">
                <div className="top-wrapper">
                    <div className="nickname">{this.props.name}</div> |
                    <div className="date">{this.props.date}</div>
                </div>
                <div className="message">{this.props.content}</div>
            </div>
        );
    }
}
export default GuestNote;
