import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {changePostModal} from "../reducer/ui/action";
import {changeTitle, changeAuthor, changeCategory, changeBoby, savePost, editPost} from '../reducer/post/action';
import uuid from 'uuid';


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

class PostForm extends React.Component {
    render() {
        let {open, categories, post, changeModal, changeTitle, changeAuthor, changeCategory, changeBody, save,editPost} = this.props;
        return (
            <div>
                <Modal
                    isOpen={open}
                    onRequestClose={() => {
                        changeModal(false)
                    }}
                    style={customStyles}
                >
                    <ul className="formModal">
                        <li className="fromItem">
                            <label>标题：</label>
                            <input value={post.title} disabled={post.id !== ""} onChange={changeTitle.bind(this)}
                                   type="text"/>
                        </li>
                        <li className="fromItem">
                            <label>作者：</label>
                            <input value={post.author} onChange={changeAuthor.bind(this)} type="text"/>
                        </li>
                        <li className="fromItem">
                            <label>类别：</label>
                            <select value={post.category} disabled={post.id !== ""}
                                    onChange={changeCategory.bind(this)}>
                                {
                                    categories.map((category) => {
                                        return (
                                            <option key={category.path} value={category.name}>{category.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </li>
                        <li className="fromItem">
                            <label style={{alignSelf: "flex-start"}}>内容：</label>
                            <textarea value={post.body} onChange={changeBody.bind(this)} rows="6"></textarea>
                        </li>
                        <li className="fromItem">
                            <button className="btn btn-danger" onClick={() => changeModal(false)}>取消</button>
                            <button className="btn btn-info"
                                    onClick={() => {
                                        // console.log("onClick");
                                        // console.log(post.id !== "");
                                        post.id !== "" ? editPost(post) : save(post)
                                    }}>保存
                            </button>
                        </li>
                    </ul>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = ({categories, uiState, post}) => {
    return {
        categories: categories,
        open: uiState.postForm,
        post: post
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeModal: (open) => {
            dispatch(changePostModal(open))
        },
        changeTitle: (evet) => {
            // console.log(evet.target.value);
            dispatch(changeTitle(evet.target.value))
        },
        changeAuthor: (evet) => {
            // console.log(evet.target.value);
            dispatch(changeAuthor(evet.target.value));
        },
        changeCategory: (evet) => {
            // console.log(evet.target.value);
            dispatch(changeCategory(evet.target.value))
        },
        changeBody: (evet) => {
            // console.log(evet.target.value);
            dispatch(changeBoby(evet.target.value))
        },
        save: (post) => {
            post.id = uuid();
            post.timestamp = new Date().getTime();
            // console.log(post);
            dispatch(savePost(post));
            dispatch(changePostModal(false));
            window.location.reload();
        },
        editPost: (post) => {
            // console.log("editPost");
            dispatch(editPost(post));
            dispatch(changePostModal(false));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);