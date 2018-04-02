import {SET_COMMENTS, UPDATE_COMMENT} from "./action";

export const comments = (state = {}, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return action.comments;
        case UPDATE_COMMENT:
            return {
                ...state,
                [action.id]: action.comment
            };
        default:
            return state;
    }
};