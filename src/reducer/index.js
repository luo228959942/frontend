import {categories} from "./categories";
import {posts} from "./posts";
import {post} from "./post";
import {comment} from "./comment";
import {comments} from "./comments";
import {combineReducers} from 'redux';
import {uiState} from './ui'

export const reducer=combineReducers({categories,posts,post,comments,uiState,comment});