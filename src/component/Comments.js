import React from 'react';
import {connect} from 'react-redux';
import {updateCommentVote, deleteCommentForId, getCommentForId} from '../reducer/comments/action';
import {changeCommentModal} from "../reducer/ui/action";
import CommentFrom from './CommentForm';

class Comments extends React.Component {
    render() {
        let {comments, upVote, downVote, editComment, deleteComment} = this.props;

        return (
            <div>
                {
                    comments.map((comment) => {
                        if (!comment.deleted && !comment.parentDeleted){
                            return (
                                <div key={comment.id} className="postItem flex">
                                    <div className="postInfo flex" style={{padding: "0"}}>
                                        <div className="flex infoHead">
                                            <p className="author">{comment.author}：</p>
                                        </div>
                                        <h3 className="postTitle">
                                            {comment.body}
                                        </h3>
                                        <div className="infoFoot flex align-items"
                                             style={{justifyContent: "space-between"}}>
                                            <div>
                                                <i className="iconfont icon-zan" onClick={() => upVote(comment.id)}/>
                                                <small>{comment.voteScore}</small>
                                                <i className="iconfont icon-iconfontzan"
                                                   onClick={() => downVote(comment.id)}/>
                                            </div>
                                            <div className="flex">
                                                <p style={{padding: "0 10px"}}
                                                   onClick={() => editComment(comment.id)}>编辑</p>
                                                <p style={{padding: "0 10px"}}
                                                   onClick={() => deleteComment(comment.id)}>删除</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })
                }
                <CommentFrom/>
            </div>

        )
    }
}

const mapStateToProps = ({comments}) => {
    return {
        comments: Object.values(comments)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editComment: (id) => {
            // dispatch(getPostsForPostId(id));
            // console.log(id);
            dispatch(getCommentForId(id));
            dispatch(changeCommentModal(true));
        },
        deleteComment: (id) => {
            // console.log(posts);
            dispatch(deleteCommentForId(id));
        },
        upVote: (id) => {
            dispatch(updateCommentVote(id, {option: "upVote"}))
        },
        downVote: (id) => {
            dispatch(updateCommentVote(id, {option: "downVote"}))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);