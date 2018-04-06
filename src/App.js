import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Root from './component/Root';
import Detail from './component/Detail';

import './App.css';
import './iconfont/iconfont.css'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Root}/>
                <Route exact path="/:category" component={Root}/>
                <Route exact path="/:category/:postId" component={Detail}/>
            </React.Fragment>
        );
    }
}

export default App;
