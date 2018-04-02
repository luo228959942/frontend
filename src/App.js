import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Root from './component';
import Detail from './component/detail';

import './App.css';
import './iconfont/iconfont.css'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Root}/>
                <Route exact path="/:category" component={Root}/>
                <Route exact path="/:category/:postId" component={Detail}/>
            </div>
        );
    }
}

export default App;
