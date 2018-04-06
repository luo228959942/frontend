import React from 'react';
import {connect} from 'react-redux';
import {getCategoriesForAPI} from '../reducer/categories/action';
import {Link} from 'react-router-dom'

class Categories extends React.Component{
    componentWillMount(){
        this.props.getCategoriesForAPI();
    }

    render(){
        let {categories} =this.props;
        return(
            <ul className="categoryList">
                {
                    categories.map((category)=>{
                        return <li className="categoryItem" key={category.path}>
                            <Link to={`/${category.path}`}>{category.name}</Link>
                        </li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps=({categories})=>{
    return{
        categories:categories,
    }
};

const mapDispatchToProps=(dispatch)=>{
  return{
      getCategoriesForAPI:()=>dispatch(getCategoriesForAPI())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Categories);