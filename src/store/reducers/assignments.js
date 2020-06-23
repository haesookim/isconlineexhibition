import * as actionTypes from "../actions/actionTypes";

const initialState = {
    currentFloor: "1F",
    subjectList: ["창의연구실습", "HCI 이론 및 실습"],
    selectedSubject: "창의연구실습",
    selectedAssignment: null,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // we will handle actions via switch statement
        case actionTypes.GET_SUBJECTLIST:
            // as React, do not mutate state directly, make new object

            return state;
        default:
            break;
    }
    return state;
};
export default reducer;
