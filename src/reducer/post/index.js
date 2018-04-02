import {SET_POST, CHANGE_TITLE, CHANGE_AUTHOR, CHANGE_CATEGORY, CHANGE_BODY} from "./action";

const initPostDefault = {
    id: "",
    timestamp: "",
    title: "",
    body: "",
    author: "",
    category: ""
};

export const post = (state = initPostDefault, action) => {
    switch (action.type) {
        case SET_POST:
            return action.post;
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.title
            };
        case CHANGE_AUTHOR:
            return {
                ...state,
                author: action.author
            };
        case CHANGE_CATEGORY:
            return {
                ...state,
                category: action.category
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