import actionTypes from "../actions/actionTypes";

const initialState = { popupVisible: false };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // we will handle actions via switch statement
        case actionTypes.ACTIVATE_MENU:
            return { ...state, popupVisible: true };
        case actionTypes.CLOSE_MENU:
            return { ...state, popupVisible: false };
        default:
            break;
    }
    return state;
};

export default reducer;
