import actionTypes from "../actions/actionTypes";

const initialState = {
    currentFloor: "1F",
    subjectList: [
        {
            name: "창의연구실습",
            desc:
                "알고 계셨습니까, 휴먼? AI는 이미 우리 사회 곳곳에 퍼져 있다는 것을…. 아무도 모르는 사이 우리의 삶을 이롭게 만들 수도, 통제할 수도 있는 AI. 어떻게 바라 보아야 할까요? 창의력 뿜뿜 사변적 디자인 프로젝트와 함께 고민해 보아요!",
            link: "CRP",
            position: "1층 야외공간",
        },
        {
            name: "HCI 이론 및 실습",
            desc:
                "HCI는 컴퓨터와 사람을 잇는 공부를 하는 학문! 이번 HCI 최종 과제는 챗봇 만들기였습니다. 사용자에게 꼭 맞춘 친절하고 재미있는 챗봇들을 구경하고 가세요!",
            link: "HCI",
            position: "1층 스튜디오",
        },
    ],
    selectedSubject: {
        name: "창의연구실습",
        desc:
            "알고 계셨습니까, 휴먼? AI는 이미 우리 사회 곳곳에 퍼져 있다는 것을…. 아무도 모르는 사이 우리의 삶을 이롭게 만들 수도, 통제할 수도 있는 AI. 어떻게 바라 보아야 할까요? 창의력 뿜뿜 사변적 디자인 프로젝트와 함께 고민해 보아요!",
        link: "CRP",
        position: "1층 야외공간",
    },
    assignmentList: [
        {
            title: "",
            authors: "",
            url: "",
            desc_m: "",
            desc_s: "",
            code: "",
        },
    ],
    selectedAssignment: {
        title: "",
        authors: "",
        url: "",
        desc_m: "",
        desc_s: "",
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // we will handle actions via switch statement
        case actionTypes.GET_FLOOR:
            return {
                ...state,
                currentFloor: action.floor,
                subjectList: action.subjectList,
                selectedSubject: action.selectedSubject,
            };
        case actionTypes.GET_SUBJECTLIST:
            // as React, do not mutate state directly, make new object

            return state;
        case actionTypes.GET_SUBJECT:
            return {
                ...state,
                selectedSubject: action.subject,
            };

        case actionTypes.GET_ASSIGNLIST:
            return { ...state, assignmentList: action.assignments };
        case actionTypes.GET_ASSIGNMENT:
            return { ...state, selectedAssignment: action.assign };
        default:
            break;
    }
    return state;
};
export default reducer;
