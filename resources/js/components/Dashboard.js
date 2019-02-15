import React, { Component } from 'react'
import { Layout, List, Row, Col, Tag } from 'antd'
import './Dashboard.less'

const { Header, Footer, Content } = Layout

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
]
const data1 = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
]

export default class Dashboard extends Component {
    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Content style={{ padding: '24px 50px 0' }}>
                    <div style={{ background: '#fff', padding: 24 }}>
                        <Row gutter={8}>
                            <Col span={12}>
                                <List
                                    size="small"
                                    header={<div>Header</div>}
                                    footer={<div>Footer</div>}
                                    bordered
                                    dataSource={data1}
                                    renderItem={item => (
                                        <List.Item>{item}</List.Item>
                                    )}
                                />
                            </Col>
                            <Col span={12}>
                                <List
                                    size="small"
                                    header={<div>Bill Listing</div>}
                                    bordered
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item className="bill-list">
                                            <div>{item}</div>
                                            <Tag>Completed</Tag>
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    VP Finance ©2019 Created by James
                </Footer>
            </Layout>
        )
    }
}
