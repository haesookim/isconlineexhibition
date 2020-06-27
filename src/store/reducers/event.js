import actionTypes from "../actions/actionTypes";

const initialState = { popupVisible: false, eventItem: null };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // we will handle actions via switch statement
        case actionTypes.ACTIVATE_POPUP:
            return { ...state, popupVisible: true, eventItem: action.event };
        case actionTypes.CLOSE_POPUP:
            return { ...state, popupVisible: false, eventItem: null };
        default:
            break;
    }
    return state;
};

export default reducer;
