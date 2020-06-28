import React from "react";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

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
        nickname: "",
        password: "",
        content: "",
    };

    onClickSendMsg = () => {
        let newMsg = {
            icon_type: 1,
            nickname: this.state.nickname,
            password: this.state.password,
            content: this.state.content,
        };
        this.props.sendMessage(newMsg);
    };

    componentDidMount = () => {
        this.props.getMessages();
    };
    render() {
        const messages = this.props.messages.map((msg) => {
            return (
                <GuestNote
                    name={msg.nickname}
                    date={msg.date}
                    key={msg.id}
                    content={msg.content}
                />
            );
        });
        return (
            <div id="guestbook" className="main">
                <img src={infodesk} alt="인포데스크 아트워크"></img>
                <div id="message-container">
                    <div id="scrollview">{messages}</div>
                    <div id="inputview">
                        <input
                            id="nickname"
                            placeholder="작성자"
                            onChange={(e) => {
                                this.setState({ nickname: e.target.value });
                            }}
                        ></input>
                        <input
                            id="password"
                            placeholder="비밀번호"
                            onChange={(e) => {
                                this.setState({ password: e.target.value });
                            }}
                        ></input>
                        <textarea
                            id="content"
                            placeholder="댓글을 입력해주세요"
                            onChange={(e) => {
                                this.setState({ content: e.target.value });
                            }}
                        ></textarea>
                        <button onClick={() => this.onClickSendMsg()}>
                            댓글 입력
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        messages: state.message.messageList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: () => {
            dispatch(actionCreators.getMsgs());
        },
        sendMessage: (message) => {
            console.log(message);
            dispatch(actionCreators.sendMsg(message));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestBook);
