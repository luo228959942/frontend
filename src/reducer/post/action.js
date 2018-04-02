import * as api from '../../utils/api';
import {updatePost} from '../posts/action'

export const SET_POST = "SET_POST";
export const CHANGE_AUTHOR = "CHANGE_AUTHOR";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const CHANGE_BODY = "CHANGE_BODY";
export const CHANGE_CATEGORY = "CHANGE_CATEGORY";

export const setPost = (post) => {
    return {
        type: SET_POST,
        post
    }
};

export const changeTitle = (title) => {
    return {
        type: CHANGE_TITLE,
        title
    }
};

export const changeAuthor = (author) => {
    return {
        type: CHANGE_AUTHOR,
        author
    }
};

export const changeCategory = (category) => {
    return {
        type: CHANGE_CATEGORY,
        category
    }
};

export const changeBoby = (body) => {
    return {
        type: CHANGE_BODY,
        body
    }
};

export const setDefaultPost = () => dispatch => {
    dispatch(
        setPost({
            id: "",
            timestamp: "",
            title: "",
            body: "",
            author: "",
            category: "react"
        })
    )
};

export const getPostsForPostId = (postId) => dispatch => {
    api.getPostDetail(postId).then((respond) => {
        if (!respond.error) {
            // console.log(respond);
            dispatch(
                setPost(respond)
            )
        }

    })
};

export const savePost = (post) => dispatch => {
    api.createPost(post).then((respond) => {
        // console.log(respond);
        if (!respond.error) {
            dispatch(setDefaultPost())
        }
    })
};

export const editPost = (post) => dispatch => {
    api.updatePostDeteil(post.id,post).then((respond) => {
        // dispatch(setDefaultPost());
        dispatch(updatePost(post.id,post));
    })
};