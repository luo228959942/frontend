import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setPosts, getPostsForAll, getPostsForCategory, deletePostForId,updatePostVote} from "../reducer/posts/action";
import {getPostsForPostId, setDefaultPost} from '../reducer/post/action'
import PostForm from './postForm';
import {changePostModal} from "../reducer/ui/action";

class Posts extends Component {

    sort = (even) => {
        this.props.sort(even.target.value, this.props.posts)
    };


    render() {
        let {posts, editPost, deletePost, addPost,upVote,downVote} = this.props;

        return (
            <div>
                <div className="flex align-items actionBar">
                    <div>
                        <button className="btn btn-primary" onClick={() => addPost()}>
                            {/*<Link to="/create">新增</Link>*/}
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
                        if (!post.deleted) {
                            return (
                                <div key={post.id} className="postItem flex">
                                    <div  className="postInfo flex">
                                        <div className="flex infoHead">
                                            <p className="author">{post.author}</p>
                                            <p className="time">{new Date(post.timestamp).toLocaleDateString() + "  " + new Date(post.timestamp).toLocaleTimeString()}</p>
                                        </div>
                                        <h2 className="postTitle">
                                            <Link to={`/${post.category}/${post.id}`}>
                                                {post.title}
                                            </Link>

                                        </h2>
                                        <div className="infoFoot flex align-items">
                                            <div>
                                                <i className="iconfont icon-pinglun"/>
                                                <small>{post.commentCount}</small>
                                            </div>
                                            <div>
                                                <i className="iconfont icon-zan" onClick={()=>upVote(post.id)} />
                                                <small>{post.voteScore}</small>
                                                <i className="iconfont icon-iconfontzan" onClick={()=>downVote(post.id)}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="postAction flex align-items">
                                        <p onClick={() => editPost(post.id)}>编辑</p>
                                        <p onClick={() => deletePost(post.id, posts)}>删除</p>
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>
                <PostForm/>
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
        changeModal: (open) => dispatch(changePostModal(open)),
        addPost: () => {
            dispatch(setDefaultPost());
            dispatch(changePostModal(true));
        },
        editPost: (id) => {
            dispatch(getPostsForPostId(id));
            dispatch(changePostModal(true));
        },
        deletePost: (id, posts) => {
            // console.log(posts);
            dispatch(deletePostForId(id, posts));
        },
        upVote:(id)=>{
            dispatch(updatePostVote(id,{option:"upVote"}))
        },
        downVote:(id)=>{
            dispatch(updatePostVote(id,{option:"downVote"}))
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);