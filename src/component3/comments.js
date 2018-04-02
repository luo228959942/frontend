import React from 'react';
import {connect} from 'react-redux';


class Comments extends React.Component {
    render() {
        let {comments} = this.props;

        return (
            <div>
                {
                    comments.map((comment) => {
                        // console.info("comment", comment);
                        return (
                            <div key={comment.id} className="postItem flex">
                                <div className="postInfo flex" style={{padding:"0"}}>
                                    <div className="flex infoHead">
                                        <p className="author">{comment.author}：</p>
                                    </div>
                                    <h3 className="postTitle">
                                        {comment.body}
                                    </h3>
                                    <div className="infoFoot flex align-items"
                                         style={{justifyContent: "space-between"}}>
                                        <div>
                                            <i className="iconfont icon-zan"></i>
                                            <small>{comment.voteScore}</small>
                                            <i className="iconfont icon-iconfontzan"></i>
                                        </div>
                                        <div className="flex">
                                            <p style={{padding: "0 10px"}}>编辑</p>
                                            <p style={{padding: "0 10px"}}>删除</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
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
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);