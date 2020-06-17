import React from "react";
import infodesk from "../../images/infodesk.png";

import GuestNote from "../../Component/GuestNote";

import "./GuestBook.scss";

class GuestBook extends React.Component {
    state = {
        messages: [
            {
                name: "용삼",
                date: "2020년 6월 17일",
                message: "이런식으로 메시지가 들어갑니다",
            },
            {
                name: "해수",
                date: "2020년 6월 17일",
                message: "이런식으로 메시지가 들어갑니다",
            },
            {
                name: "해중",
                date: "2020년 6월 17일",
                message: "이런식으로 메시지가 들어갑니다",
            },
            {
                name: "정은",
                date: "2020년 6월 17일",
                message: "이런식으로 메시지가 들어갑니다",
            },
            {
                name: "상욱",
                date: "2020년 6월 17일",
                message: "이런식으로 메시지가 들어갑니다",
            },
            {
                name: "호륜",
                date: "2020년 6월 17일",
                message: "이런식으로 메시지가 들어갑니다",
            },
        ],
    };
    render() {
        const messages = this.state.messages.map((msg) => {
            return (
                <GuestNote
                    name={msg.name}
                    date={msg.date}
                    content={msg.message}
                />
            );
        });
        return (
            <div id="guestbook" className="main">
                <img src={infodesk} alt="인포데스크 아트워크"></img>
                <div id="message-container">
                    <div id="scrollview">{messages}</div>
                    <div id="inputview">
                        <input placeholder="작성자"></input>
                        <input placeholder="비밀번호"></input>
                        <textarea placeholder="댓글을 입력해주세요"></textarea>
                        <button>댓글 입력</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GuestBook;
