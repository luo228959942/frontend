import * as api from '../../utils/api';

export const SET_POSTS = "SET_POSTS";
export const UPDATE_POST = "UPDATE_POST";

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    }
};

export const updatePost = (postId, post) => {
    return {
        type: UPDATE_POST,
        postId,
        post
    }
};


export const getPostsForAll = () => dispatch => {
    api.getPosts().then((respond) => {
        // console.log(respond);
        let posts = respond.reduce((posts, post) => {
            posts[post.id] = post;
            return posts;
        }, {});
        dispatch(
            setPosts(posts)
        )
    })
};

export const getPostsForCategory = (category) => dispatch => {
    api.getPostsForCategorie({category}).then((respond) => {
        // console.log(respond);
        let posts = respond.reduce((posts, post) => {
            posts[post.id] = post;
            return posts;
        }, {});
        dispatch(
            setPosts(posts)
        )
    })
};

export const getPostsForPostId = (postId) => dispatch => {
    api.getPostDetail(postId).then((respond) => {
        if (!respond.error) {
            dispatch(
                updatePost(postId, respond)
            )
        }

    })
};

export const deletePostForId = (postId) => dispatch => {
    api.deletePostForID(postId).then((respond) => {
        dispatch(updatePost(postId,respond));
    })
};

export const updatePostVote = (postId, option) => dispatch => {
    api.updatePostVote(postId, option).then((respond) => {
        dispatch(updatePost(postId,respond));
    })
};
