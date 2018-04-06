import React from 'react';
import Modal from 'react-modal';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {changeCommentModal} from "../reducer/ui/action";
import {changeAuthor, changeBoby, saveComment, editComment} from '../reducer/comment/action';
// import {uuid} from "../utils/uuid";


Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class CommentForm extends React.Component {
    render() {
        let {open, comment, changeModal, changeAuthor, changeBody, save,editPost} = this.props;
        // console.log(comment);
        return (
            <div>
                <Modal
                    isOpen={open}
                    onRequestClose={() => {
                        changeModal(false)
                    }}
                    style={customStyles}
                >
                    <ul className="formModal" style={{height:"40vh"}}>
                        <li className="fromItem">
                            <label>作者：</label>
                            <input value={comment.author} onChange={changeAuthor.bind(this)} type="text"/>
                        </li>
                        <li className="fromItem">
                            <label style={{alignSelf: "flex-start"}}>内容：</label>
                            <textarea value={comment.body} onChange={changeBody.bind(this)} rows="6"></textarea>
                        </li>
                        <li className="fromItem">
                            <button className="btn btn-danger" onClick={() => changeModal(false)}>取消</button>
                            <button className="btn btn-info"
                                    onClick={() => {
                                        // console.log("onClick");
                                        // console.log(comment.id !== "");
                                        comment.id !== "" ? editPost(comment) : save(comment)
                                    }}>评论
                            </button>
                        </li>
                    </ul>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = ({ uiState, comment}) => {
    return {
        open: uiState.commentForm,
        comment: comment
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeModal: (open) => {
            dispatch(changeCommentModal(open))
        },
        changeAuthor: (evet) => {
            // console.log(evet.target.value);
            dispatch(changeAuthor(evet.target.value));
        },
        changeBody: (evet) => {
            // console.log(evet.target.value);
            dispatch(changeBoby(evet.target.value))
        },
        save: (comment) => {
            // console.log(uuid());
            comment.id = uuid();
            comment.timestamp = new Date().getTime();
            // console.log(comment);
            dispatch(saveComment(comment));
            dispatch(changeCommentModal(false));
        },
        editPost: (post) => {
            // console.log("editPost");
            dispatch(editComment(post));
            dispatch(changeCommentModal(false));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);