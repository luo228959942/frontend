import {SET_COMMENT,SET_PARENT_ID, CHANGE_AUTHOR, CHANGE_BODY} from "./action";

const initCommentDefault = {
    id: "",
    timestamp: "",
    body: "",
    author: "",
    parentId:""
};

export const comment = (state = initCommentDefault, action) => {
    switch (action.type) {
        case SET_COMMENT:
            return action.comment;
        case SET_PARENT_ID:
            return {
                ...state,
                parentId:action.parentId
            };
        case CHANGE_AUTHOR:
            return {
                ...state,
                author: action.author
            };
        case CHANGE_BODY:
            return {
                ...state,
                body: action.body
            };
        default:
            return state;
    }
};