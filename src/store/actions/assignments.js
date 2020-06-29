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
    console.log(subject, key);
    return (dispatch) => {
        return axios
            .get("/assignment/" + subject + "_" + key)
            .then((res) => dispatch(getAssignment_(res.data)))
            .then(() => {
                if (window.location.pathname.split("/").length < 6) {
                    dispatch(push(window.location.pathname + "/" + key));
                }
                // } else if (window.location.pathname.split("/")[5] === key) {
                //     dispatch(push(window.location.pathname));
                // }
            });
    };
};

export const getAssignments_ = (data) => {
    return { type: actionTypes.GET_ASSIGNLIST, assignments: data };
};

export const getAssignments = (subject) => {
    console.log(subject);
    return (dispatch) => {
        return axios.get("/class/" + subject).then((res) => {
            dispatch(getAssignments_(res.data));
        });
    };
};
