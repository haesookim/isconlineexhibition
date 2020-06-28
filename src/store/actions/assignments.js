import actionTypes from "./actionTypes";
import axios from "axios";
import { push } from "connected-react-router";

export const getFloor = (num) => {
    return { type: actionTypes.GET_FLOOR, floor: num };
};

export const getAssignment_ = (data) => {
    return { type: actionTypes.GET_ASSIGNMENT, assign: data };
};

export const getAssignment = (subject, key) => {
    return (dispatch) => {
        return axios
            .get("/info/" + subject + "_" + key)
            .then((res) => dispatch(getAssignment_(res.data)))
            .then(() => {
                if (window.location.pathname.split("/").length < 6) {
                    dispatch(push(window.location.pathname + "/" + key));
                } else if (window.location.pathname.split("/")[5] === key) {
                    dispatch(push(window.location.pathname));
                }
            });
    };
};
