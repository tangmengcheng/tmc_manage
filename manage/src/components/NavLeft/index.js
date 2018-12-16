import React, {Component} from 'react';
import { Menu } from 'antd';
import './index.less';
import MenuConfig from './../../config/menuConfig.js';
const SubMenu = Menu.SubMenu;
export default class NavLeft extends Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
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
                {item.title}
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
                    theme="dark"
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}