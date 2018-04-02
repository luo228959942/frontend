
import {CHANGE_POST_MODAL,CHANGE_COMMENT_MODAL,CHANGE_SELETE_ID,CHANGE_SELETE_CATEGORY} from "./action";

const initDeafult={
    postForm:false,
    commentForm:false,
    selectId:"",
    selectCategory:"all"
};

export const uiState=(state=initDeafult,action)=>{
    switch (action.type){
        case CHANGE_POST_MODAL:
            return {
                ...state,
                postForm:action.open
            };
        case CHANGE_COMMENT_MODAL:
            return {
                ...state,
                commentForm:action.open
            };
        case CHANGE_SELETE_ID:
            return{
                ...state,
                selectId:action.id
            };
        case CHANGE_SELETE_CATEGORY:
            return{
                ...state,
                selectCategory:action.category
            };
        default:
            return state;
    }
};