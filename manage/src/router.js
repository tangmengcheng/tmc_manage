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

// city
import City from './pages/city/index.js';

// order
import Order from './pages/order/index.js'
import OrderDetail from './pages/order/detail.js';

// common
import Common from './common.js';

// user
import User from './pages/user/index.js';

// map
import BikeMap from './pages/map/bikeMap.js';

// echarts
import Bar from './pages/echarts/bar/index.js';
import Line from './pages/echarts/line/index.js';
import Pie from './pages/echarts/pie/index.js';

// permission
import Permission from './pages/permission/index.js';

import NoMatch from './pages/nomatch/index.js';

export default class IRouter extends Component {

    render() {
        return (
            <Router>
                <App>
                    <Switch>
                    <Route path="/login" component={Login}/>
                    {/* <Route path="/admin" component={Admin}/> */}
                    <Route path="/common" render={() =>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                        </Common>
                    }/>
                    <Route path="/" render={() => 
                        <Admin>
                            <Switch>
                                <Route path="/ui/buttons" component={Buttons}></Route>
                                <Route path="/ui/modals" component={Modals}></Route>
                                <Route path="/ui/loadings" component={Loadings}></Route>
                                <Route path="/ui/notification" component={Notification}></Route>
                                <Route path="/ui/messages" component={Messages}></Route>
                                <Route path="/ui/tabs" component={Tabs}></Route>
                                <Route path="/ui/gallery" component={Gallery}></Route>
                                <Route path="/ui/carousel" component={Carousels}></Route>
                                <Route path="/form/login" component={FormLogin}></Route>
                                <Route path="/form/reg" component={FormRegistery}></Route>
                                <Route path="/table/basic" component={BasicTable}></Route>
                                <Route path="/table/high" component={HighTable}></Route>
                                <Route path="/rich" component={RichText}></Route>
                                <Route path="/city" component={City}></Route>
                                <Route path="/order" component={Order} />
                                <Route path="/user" component={User}></Route>
                                <Route path="/bikeMap" component={BikeMap}></Route>
                                <Route path="/charts/bar" component={Bar}></Route>
                                <Route path="/charts/line" component={Line}></Route>
                                <Route path="/charts/pie" component={Pie}></Route>
                                <Route path="/permission" component={Permission}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    } />
                    </Switch>
                </App>
            </Router>
        )
    }
}