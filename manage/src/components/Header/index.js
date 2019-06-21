import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import './index.less';
import Util from './../../util/util.js';
import axios from './../../axios/index.js';


class Header extends Component {

    state = {}
    componentWillMount() {
        this.setState({
            userName: 'Admin'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeatherAPIData();
    }
    getWeatherAPIData() {
        let city = '武汉';
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            console.log(res)
            if(res.status === 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    render() {
        const { menuName, menuType } = this.props;
        console.log(menuType);
        return(
            <div className="header">
                <Row className="header-top">
                    {
                        menuType ?
                        <Col span="6" className="logo">
                            <img src="/assets/logo-ant.svg" alt=""/>
                            <span>IMooc 通用管理系统</span>
                        </Col> : ''
                    }
                    <Col span={menuType ? 18 : 24}>
                        <span>欢迎, {this.state.userName}</span>
                        <a href="http://www.baidu.com">退出</a>
                    </Col>
                </Row>
                {
                    menuType ? '' :
                        <Row className="breadcrumb">
                        <Col span="4" className="breadcrumb-title">
                            {menuName || '首页'}
                        </Col>
                        <Col span="20" className="weather">
                            <span className="date">{this.state.sysTime}</span>
                            <span className="weather-default">{this.state.weather}</span>
                        </Col>
                    </Row>
                }
            </div>
        )
    }
}
// 从redux中获取值
const mapStateToProps = state => {
    console.log(state);
    return {
        menuName: state.menuName
    }
}
export default connect(mapStateToProps)(Header)
