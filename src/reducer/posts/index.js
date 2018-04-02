
import {SET_POSTS,UPDATE_POST} from "./action";

export const posts=(state={},action)=>{
    switch (action.type){
        case SET_POSTS:
            return action.posts;
        case UPDATE_POST:
            return {
                ...state,
                [action.postId]:action.post
            };
        default:
            return state;
    }
};