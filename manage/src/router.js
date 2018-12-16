import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import App from './App.js';

import Login from './pages/login/index.js';
import Admin from './admin.js';

import Buttons from './pages/ui/buttons.js';
import NoMatch from './pages/nomatch/index.js';

export default class IRouter extends Component {

    render() {
        return (
            <Router>
                <App>
                    <Route path="/login" component={Login}/>
                    {/* <Route path="/admin" component={Admin}/> */}
                    <Route path="/admin" render={() => 
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons}></Route>
                            <Route component={NoMatch}></Route>
                        </Admin>
                    } />
                </App>
            </Router>
        )
    }
}