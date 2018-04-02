import React,{Component} from 'react';
import Categories from './categories'
import Posts from './posts';
import {connect} from 'react-redux';
import {getPostsForCategory} from "../reducer/posts/action";

class CategoryView extends Component{

    componentWillMount(){
        this.props.getPostsForCategory(this.props.match.params.category);
    }
    componentDidUpdate(){
        this.props.getPostsForCategory(this.props.match.params.category);
    }

    render(){
        return(
            <div>
                <header>
                    <h1>帖子</h1>
                </header>
                <div className="content">
                    <div className="leftContent">
                        <Categories/>
                    </div>
                    <div className="rightContent">
                        <Posts/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=()=>{
    return{}
};

const mapDispatchToProps=(dispatch)=>{
    return{
        getPostsForCategory:(category)=>dispatch(getPostsForCategory(category)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CategoryView);