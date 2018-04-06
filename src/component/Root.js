import React,{Component} from 'react';
import Categories from './Categories'
import Posts from './Posts';
import {connect} from 'react-redux';
import {getPostsForAll,getPostsForCategory} from "../reducer/posts/action";

class Root extends Component{
    render(){
        // console.log(this.props.match.params.category);
        if(this.props.match.params.category){
            this.props.getPostsForCategory(this.props.match.params.category);
        }else {
            this.props.getPostsForAll()
        }
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
        getPostsForAll:()=>dispatch(getPostsForAll()),
        getPostsForCategory:(category)=>dispatch(getPostsForCategory(category)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Root);