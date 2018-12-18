import {createStore} from 'redux';
// 引入reducer
import reducer from '../reducer/index.js';
// 安装redux-devtools-extension的可视化工具
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    menuName: '首页'
}

const configureStore = () => createStore(reducer, initialState, composeWithDevTools());

export default configureStore;