import React from 'react';
import {connect} from 'react-redux';
import {getPostsForPostId} from '../reducer/post/action';
import Comments from './comments';
import {getCommentsForPostID} from '../reducer/comments/action'

class Detail extends React.Component {
    componentWillMount() {
        this.props.getPostsForPostId(this.props.match.params.postId);
    }

    render() {
        let {posts} = this.props;
        let post = posts[this.props.match.params.postId];
        // console.info("post", post);
        if (post && !post.deleted) {
            return (
                <div>
                    <header>
                        <h1>帖子详情</h1>
                    </header>
                    <div className="content justify-content">
                        <div style={{width: "80%"}}>
                            <div style={{padding:"10px"}}>
                                <h2 style={{padding: "20px", textAlign: "center"}}>{post.title}</h2>
                                <div className="flex " style={{
                                    justifyContent: "space-around",
                                    width: "100%",
                                    color: "#999",
                                    paddingBottom: "10px"
                                }}>
                                    <p>作者：{post.author}</p>
                                    <p>{new Date(post.timestamp).toLocaleDateString() + "  " + new Date(post.timestamp).toLocaleTimeString()}</p>
                                </div>
                                <div style={{width: "100%", textIndent: "2em", paddingBottom: "20px"}}>
                                    {post.body}
                                </div>
                                <div className="infoFoot flex align-items" style={{justifyContent: "space-between"}}>
                                    <div>
                                        <i className="iconfont icon-zan"></i>
                                        <small>{post.voteScore}</small>
                                        <i className="iconfont icon-iconfontzan"></i>
                                    </div>
                                    <div className="flex">
                                        <p style={{padding: "0 10px"}}>编辑</p>
                                        <p style={{padding: "0 10px"}}>删除</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <Comments/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="content flexBox">
                    <p>找不到您要的帖子</p>
                </div>
            )
        }


    }
}

const mapStateToProps = ({posts}) => {
    return {
        posts: posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostsForPostId: (postId) => {
            dispatch(getPostsForPostId(postId));
            dispatch(getCommentsForPostID(postId))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);