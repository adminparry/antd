import React from 'react';
import { Input, Button, Menu } from '@/components/antd';
import { Space, Avatar, Badge, Row, Dropdown, } from 'antd';
import { SearchOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

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
export interface IHeader{ 
    drawer: Function
}
class Header extends React.PureComponent<IHeader, {}, {}> {


    render() {
        return (
            <Row>
                <Space style={{ flex: 1 }}>
                    <Input prefix={<SearchOutlined />} />


                </Space>
                <Space>
                    <Avatar onClick={this.props.drawer} shape={'circle'} style={{ backgroundColor: '#87d068' }} icon={<SettingOutlined />} />

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