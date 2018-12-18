import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Admin from './admin.js'
import * as serviceWorker from './serviceWorker';
import Router from './router.js';
import configureStore from './redux/store/configureStore.js';
// Redux Store对象，管理所有的Redux状态
import { Provider } from 'react-redux';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router />      
    </Provider>, 
    document.getElementById('root')
);
// ReactDOM.render(<Router/>, document.getElementById('app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
