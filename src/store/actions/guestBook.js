import actionTypes from "./actionTypes";
import axios from "axios";
import { push } from "connected-react-router";

export const getMsgs_ = (data) => {
    return { type: actionTypes.GET_ALLMSG, messageList: data };
};

export const getMsgs = () => {
    return (dispatch) => {
        return axios.get("/msgs/").then((res) => dispatch(getMsgs_(res.data)));
    };
};

export const sendMsg_ = (data) => {
    return {
        type: actionTypes.SEND_MSG,
        icon: data.icon_type,
        content: data.content,
        id: data.id,
        nickname: data.nickname,
    };
};

export const sendMsg = (sendData) => {
    return (dispatch) => {
        // return axios
        //     .post("/add_msg", sendData)
        //     .then((res) => dispatch(sendMsg_(res.data)));

        return axios
            .post("/add_msg", sendData, {
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded; charset=UTF-8",
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};
