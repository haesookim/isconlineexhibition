import actionTypes from "./actionTypes";
import axios from "axios";

export const getFloor = (num) => {
    return { type: actionTypes.GET_FLOOR, floor: num };
};

export const getAssignment_ = (data) => {
    return { type: actionTypes.GET_ASSIGNMENT, assign: data };
};

export const getAssignment = (subject, key) => {
    return (dispatch) => {
        return fetch(
            "https://isc2020-1.herokuapp.com/info/" + subject + "_" + key,
        ).then((res) => dispatch(getAssignment_(res.data)));
    };
};
