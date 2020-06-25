import actionTypes from "./actionTypes";
import axios from "axios";

export const getFloor = (num) => {
    return { type: actionTypes.GET_FLOOR, floor: num };
};
