import React, {Component} from 'react';
import {Card, Spin, Icon, Alert} from 'antd';
import './ui.less';

export default class Loadings extends Component {

    render() {
        const icon = <Icon type="loading" style={{ fontSize:24 }} />
        const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title="Spin用法" className="span-wrap">
                    <Spin size="small" />
                    <Spin style={{margin: '0 20px'}}/>
                    <Spin size="large" />
                    <Spin indicator={icon} style={{ marginLeft: 10 }} />
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert 
                        message="React"
                        description="React高级课程"
                        type="info"
                        style={{ marginBottom: 10 }}
                    />
                    <Spin>
                        <Alert 
                            message="React"
                            description="React高级课程"
                            type="info"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert 
                            message="React"
                            description="React高级课程"
                            type="info"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert 
                            message="React"
                            description="React高级课程"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}