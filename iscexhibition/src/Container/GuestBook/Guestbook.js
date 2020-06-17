import React from "react";
import infodesk from "../../images/infodesk.png";

import "./GuestBook.scss";

class GuestBook extends React.Component {
    render() {
        return (
            <div id="guestbook" className="main">
                <img src={infodesk} alt="인포데스크 아트워크"></img>
                <div id="message-container"></div>
            </div>
        );
    }
}

export default GuestBook;
