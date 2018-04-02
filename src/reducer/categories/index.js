import {GET_CATEGORIES} from "./action";

export const categories=(state=[],action)=>{
    switch (action.type){
        case GET_CATEGORIES:
            return action.list;
        default:
            return state;
    }
};