import * as api from '../../utils/api';
import {setComment} from "../comment/action";

export const SET_COMMENTS = "SET_COMMENTS";
export const GET_COMMENT_DETAIL = "GET_COMMENT_DETAIL";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const UPDATE_COMMENT_DETAIL = "UPDATE_COMMENT_DETAIL";
export const DELETED_COMMENT = "DELETED_COMMENT";

export const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        comments
    }
};

export const updateComment = (id, comment) => {
    return {
        type: UPDATE_COMMENT,
        id,
        comment
    }
};


export const getCommentsForPostID = (PostID) => dispatch => {
    api.getComments(PostID).then((respond)=>{
        let comments = respond.reduce((comments, comment) => {
            comments[comment.id] = comment;
            return comments;
        }, {});
        dispatch(setComments(comments));
    });
};

export const getCommentForId=(id)=>dispatch=>{
    api.getCommentDetail(id).then((respond)=>{
        // console.log(respond);
        dispatch(setComment(respond));
    });
};

export const deleteCommentForId = (commentId) => dispatch => {
    api.deletedCommentForId(commentId).then((respond) => {
        dispatch(updateComment(commentId,respond));
    })
};

export const updateCommentVote = (commentId, option) => dispatch => {
    api.updateCommentVote(commentId, option).then((respond) => {
        dispatch(updateComment(commentId,respond));
    })
};
