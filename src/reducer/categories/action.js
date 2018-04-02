import * as api from '../../utils/api';

export const GET_CATEGORIES="GET_CATEGORIES";

export function getCategories(categories) {
    return{
        type:GET_CATEGORIES,
        list:categories
    }
}

export const getCategoriesForAPI=()=>dispatch=>{
    api.getCategories().then((respond)=>{
        dispatch(getCategories(respond.categories))
    })

};