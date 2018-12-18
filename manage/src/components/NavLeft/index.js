import React, {Component} from 'react';
import { Menu } from 'antd';
import './index.less';
import MenuConfig from './../../config/menuConfig.js';
import {NavLink} from 'react-router-dom';
import {switchMenu} from '../../redux/action/index.js';
import {connect} from 'react-redux';
const SubMenu = Menu.SubMenu;
class NavLeft extends Component {

    state = {
        currentKey: ''
    }

    handleClick = ({item, key}) => {
        console.log(item)
        // 事件派发, 自动调用reducer, 通过reducer保存到store对象中
        const {dispatch} = this.props;
        dispatch(switchMenu(item.props.title))
        this.setState({
            currentKey: key
        })
    }
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
            menuTreeNode,
            currentKey
        })
    }
    /**
     * 菜单渲染
     */
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {/* 递归调用子节点 */}
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    
    render() {
        return(
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="logo" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.currentKey]}
                    theme="dark"
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}
export default connect()(NavLeft)