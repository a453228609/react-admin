import React, {Component} from 'react';
import {Row, Col, Card, Tag, Icon, Timeline} from 'antd';
import config from '@/commons/config-hoc';
import PageContent from '@/layouts/page-content';
import './style.less';

@config({
    path: '/',
    title: {local: 'home', text: '首页', icon: 'home'},
    breadcrumbs: [{key: 'home', local: 'home', text: '首页', icon: 'home'}],
})
export default class Home extends Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <PageContent styleName="root">
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <Card title="收入" extra={<Tag color="#1c84c6">月</Tag>}>
                            <div>
                                <h1>40 886,200</h1>
                                <div style={{ color: `#1c84c6` }}>
                                    98%{' '}
                                    <Icon
                                        type="star"
                                        style={{ fontSize: 14, color: '#1c84c6' }}
                                    />
                                </div>
                                <small>总收入</small>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card title="订单" extra={<Tag color="#23c6c8">全年</Tag>}>
                            <div>
                                <h1>275,800</h1>
                                <div style={{ color: `#23c6c8` }}>
                                    35%{' '}
                                    <Icon
                                        type="arrow-up"
                                        style={{ fontSize: 14, color: '#23c6c8' }}
                                    />
                                </div>
                                <small>新订单</small>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card title="访客" extra={<Tag color="#1ab394">今天</Tag>}>
                            <div>
                                <h1>106,120</h1>
                                <div style={{ color: `#1ab394` }}>
                                    18%{' '}
                                    <Icon
                                        type="arrow-up"
                                        style={{ fontSize: 14, color: '#1ab394' }}
                                    />
                                </div>
                                <small>新访客</small>
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            title="活跃用户"
                            extra={<Tag color="#ed5565">最近一个月</Tag>}
                        >
                            <div>
                                <h1>80,600</h1>
                                <div style={{ color: `#ed5565` }}>
                                    38%{' '}
                                    <Icon
                                        type="arrow-down"
                                        style={{ fontSize: 14, color: '#ed5565' }}
                                    />
                                </div>
                                <small>12月</small>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16} style={{marginTop: 15 }}>
                    <Col className="gutter-row" span={24}>
                        <Card title="项目进度">
                            <Timeline>
                                <Timeline.Item dot={<Icon type="loading" />}>
                                    <strong>服务器已彻底崩溃</strong>{' '}
                                    <p style={{ margin: `5px 0` }}>还未检查出错误</p>
                                    <p style={{ margin: `5px 0` }}>12:00</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <strong>喝水、上厕所、做测试</strong>{' '}
                                    <p style={{ margin: `5px 0` }}>
                                        喝了4杯水，上了3次厕所，控制台输出出2324个错误，神啊，带我走吧{' '}
                                    </p>
                                    <p style={{ margin: `5px 0` }}>11:00</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <strong>项目经理打电话来了</strong>{' '}
                                    <p style={{ margin: `5px 0` }}>
                                        TMD，项目经理居然还没有起床！！！
                                    </p>
                                    <p style={{ margin: `5px 0` }}>10:00</p>
                                </Timeline.Item>
                            </Timeline>
                        </Card>
                    </Col>
                </Row>
            </PageContent>
        );
    }
}
