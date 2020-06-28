import actionTypes from "../actions/actionTypes";

const initialState = { messageList: [] };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // we will handle actions via switch statement
        case actionTypes.GET_ALLMSG:
            return { ...state, messageList: action.messageList };
        case actionTypes.SEND_MSG:
            const newMsg = {
                icon: action.icon,
                id: action.id,
                content: action.content,
                nickname: action.nickname,
            };

            const new_MsgList = state.messageList.concat(newMsg);
            return { ...state, messageList: new_MsgList };
        default:
            break;
    }
    return state;
};

export default reducer;
