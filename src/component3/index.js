import React,{Component} from 'react';
import Categories from './categories'
import Posts from './posts';
import {connect} from 'react-redux';
import {getPostsForAll} from "../reducer/posts/action";

class Root extends Component{

    componentWillMount(){
        this.props.getPostsForAll()
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
        getPostsForAll:(category)=>dispatch(getPostsForAll()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Root);