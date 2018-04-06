const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};
//获取类别
export const getCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data);

//获取某类别的所以帖子
export const getPostsForCategorie = (category) =>
    fetch(`${api}/${category.category}/posts`, {headers})
        .then(res => res.json())
        .then(data => data);

//或者所有帖子
export const getPosts = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json())
        .then(data => data);

//创建帖子
/*
*
* PARAMS:
* id - UUID should be fine, but any unique id will work
* timestamp - timestamp in whatever format you like, you can use Date.now() if you like
* title - String
* body - String
* author - String
* category: Any of the categories listed in Categories.js. Feel free to extend this list as you desire.
*
* */
export const createPost = (body) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json());

//获取帖子详情
export const getPostDetail = (postId) =>
    fetch(`${api}/posts/${postId}`, {headers})
        .then(res => res.json())
        .then(data => data);

/*
*
* option - String: Either "upVote" or "downVote"
*
* */
//修改帖子评分
export const updatePostVote = (postId, option) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)
    })
        .then(res => res.json())
        .then(data => data);

/*
*
* title - String
* body - String
*
* */
//修改帖子内容
export const updatePostDeteil = (postId, body) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => data);

//删除帖子
export const deletePostForID = (postId) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers
    })
        .then(res => res.json())
        .then(data => data);


//获取评论列表
export const getComments = (postID) =>
    fetch(`${api}/posts/${postID}/comments`, {headers})
        .then(res => res.json())
        .then(data => data);

//新增评论
/*
*
* id: Any unique ID. As with posts, UUID is probably the best here.
* timestamp: timestamp. Get this however you want.
* body: String
* author: String
* parentId: Should match a post id in the database.
*
* */
export const createComment = (body) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json());

//获取帖子评论详情
export const getCommentDetail = (id) =>
    fetch(`${api}/comments/${id}`, {headers})
        .then(res => res.json())
        .then(data => data);


/*
*
* option - String: Either "upVote" or "downVote"
*
* */
//修改评论评分
export const updateCommentVote = (commentsId, option) =>
    fetch(`${api}/comments/${commentsId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)
    })
        .then(res => res.json())
        .then(data => data);


/*
*
* title - String
* body - String
*
* */
//修改帖子内容
export const updateCommentDeteil = (commentsId, body) =>
    fetch(`${api}/comments/${commentsId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => data);


//删除评论
export const deletedCommentForId = (commentsId) =>
    fetch(`${api}/comments/${commentsId}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json());