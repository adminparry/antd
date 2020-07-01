import React from 'react';
import { Input, Button, Menu } from '@/components/antd';
import { Space, Avatar, Badge, Row, Dropdown, } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item key="1">
            退出登陆
        </Menu.Item>
        <Menu.Item key="11">
            我的消息
        </Menu.Item>
        <Menu.Item key="111">
            个人中心
        </Menu.Item>
    </Menu>
)
class Header extends React.PureComponent {


    render() {
        return (
            <Row>
                <Space style={{ flex: 1 }}>
                    <Input prefix={<SearchOutlined />} />


                </Space>
                <Space>
                    <Avatar shape={'circle'} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />

                    <Dropdown overlay={menu} placement="bottomRight">
                        <Badge count={1}>
                            <Avatar shape="square" icon={<UserOutlined />} />
                        </Badge>
                    </Dropdown>

                </Space>

            </Row>
        )
    }
}

export default Header