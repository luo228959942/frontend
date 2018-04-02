import * as api from '../../utils/api';
import {updateComment} from '../comments/action'

export const SET_COMMENT = "SET_COMMENT";
export const SET_PARENT_ID = "SET_PARENT_ID";
export const CHANGE_AUTHOR = "CHANGE_AUTHOR";
export const CHANGE_BODY = "CHANGE_BODY";

export const setComment = (comment) => {
    return {
        type: SET_COMMENT,
        comment
    }
};

export const setParentId = (parentId) => {
    return {
        type: SET_PARENT_ID,
        parentId
    }
};

export const changeAuthor = (author) => {
    return {
        type: CHANGE_AUTHOR,
        author
    }
};


export const changeBoby = (body) => {
    return {
        type: CHANGE_BODY,
        body
    }
};

export const setDefaultComment = () => dispatch => {
    dispatch(
        setComment({
            id: "",
            timestamp: "",
            body: "",
            author: "",
            parentId:""
        })
    )
};

export const getCommentForId = (commentId) => dispatch => {
    api.getCommentDetail(commentId).then((respond) => {
        if (!respond.error) {
            // console.log(respond);
            dispatch(
                setComment(respond)
            )
        }

    })
};

export const saveComment = (comment) => dispatch => {
    api.createComment(comment).then((respond) => {
        if (!respond.error) {
            // console.log(respond);
            dispatch(updateComment(respond.id, respond));
            dispatch(setDefaultComment())
        }
    })
};

export const editComment = (comment) => dispatch => {
    api.updateCommentDeteil(comment.id, comment).then((respond) => {
        dispatch(updateComment(comment.id, comment));
    })
};