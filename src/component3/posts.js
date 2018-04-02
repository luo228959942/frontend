import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setPosts, getPostsForAll, getPostsForCategory,deletePostForId} from "../reducer/posts/action";
import {getPostsForPostId,setDefaultPost} from '../reducer/post/action'
import Form from './form';
import {changeModal} from "../reducer/ui/action";

class Posts extends Component {

    sort = (even) => {
        // console.log(even.target.value);
        this.props.sort(even.target.value, this.props.posts)
    };
    render() {
        let {posts, editPost,deletePost,addPost} = this.props;
        return (
            <div>
                <div className="flex align-items actionBar">
                    <div>
                        <button className="btn btn-primary" onClick={() => addPost()}>
                            新增
                        </button>
                    </div>
                    <div className="flex">
                        <p>sort for</p>
                        <select onChange={this.sort.bind(this)}>
                            <option value="voteScore">voteScore</option>
                            <option value="timestamp">time</option>
                        </select>
                    </div>
                </div>
                <div className="postsList">
                    {posts.map((post) => {
                        // console.info("post",post);
                        return (
                            <div key={post.id} className="postItem flex">
                                <Link to={`/${post.category}/${post.id}`} className="postInfo flex">
                                    <div className="flex infoHead">
                                        <p className="author">{post.author}</p>
                                        <p className="time">{new Date(post.timestamp).toLocaleDateString() + "  " + new Date(post.timestamp).toLocaleTimeString()}</p>
                                    </div>
                                    <h2 className="postTitle">
                                        {post.title}
                                    </h2>
                                    <div className="infoFoot flex align-items">
                                        <div>
                                            <i className="iconfont icon-pinglun"></i>
                                            <small>{post.commentCount}</small>
                                        </div>
                                        <div>
                                            <i className="iconfont icon-zan"></i>
                                            <small>{post.voteScore}</small>
                                            <i className="iconfont icon-iconfontzan"></i>
                                        </div>
                                    </div>
                                </Link>
                                <div className="postAction flex align-items">
                                    <p onClick={() => editPost(post.id)}>编辑</p>
                                    <p onClick={() => deletePost(post.id,posts)}>删除</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Form/>
            </div>
        )
    }
}

const mapStateToProps = ({posts}) => {
    return {
        posts: Object.values(posts)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (key, posts) => {
            posts.sort((v1, v2) => {
                return v1[key] < v2[key];
            });
            dispatch(setPosts(posts))
        },
        getPostsForAll: () => dispatch(getPostsForAll()),
        getPostsForCategory: (category) => dispatch(getPostsForCategory(category)),
        changeModal: (open) => dispatch(changeModal(open)),
        addPost:()=>{
            dispatch(setDefaultPost());
            dispatch(changeModal(true));
        },
        editPost: (id) => {
            dispatch(getPostsForPostId(id));
            dispatch(changeModal(true));
        },
        deletePost:(id,posts)=>{
            dispatch(deletePostForId(id,posts));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);