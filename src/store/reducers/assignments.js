import * as actionTypes from "../actions/actionTypes";

const initialState = {
    subjectList: [
        /*copy from TodoList!*/
    ],
    selectedSubject: null,
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
