import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App.js';

import Login from './pages/login/index.js';
import Admin from './admin.js';

// ui
import Buttons from './pages/ui/buttons.js';
import Modals from './pages/ui/modals.js';
import Loadings from './pages/ui/loadings.js';
import Notification from './pages/ui/notice.js';
import Messages from './pages/ui/messages.js';
import Tabs from './pages/ui/tabs.js';
import Gallery from './pages/ui/gallery.js';
import Carousels from './pages/ui/carousel.js';

// form
import FormLogin from './pages/form/login.js';
import FormRegistery from './pages/form/register.js';

// table
import BasicTable from './pages/table/basicTable.js';
import HighTable from './pages/table/highTable.js';

// richText
import RichText from './pages/rich/index.js';

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
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notification}></Route>
                                <Route path="/admin/ui/messages" component={Messages}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/ui/carousel" component={Carousels}></Route>
                                <Route path="/admin/form/login" component={FormLogin}></Route>
                                <Route path="/admin/form/reg" component={FormRegistery}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>
                                <Route path="/admin/table/high" component={HighTable}></Route>
                                <Route path="/admin/rich" component={RichText}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    } />
                </App>
            </Router>
        )
    }
}