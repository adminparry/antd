import React from 'react';
import { Input, Button  ,Menu} from '@/components/antd';
import { Space, Avatar, Badge, Row, Dropdown , } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item key="2">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item key="3">
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
)
class Header extends React.PureComponent {

    
    render() {
        return (
            <Row>
                <Space style={{ flex: 1 }}>
                    <Input prefix={<SearchOutlined />} />

                    <Avatar shape={'circle'} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />

                </Space>
                <Space>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Button>bottomRight</Button>
                    </Dropdown>
                    <Badge count={1}>
                        <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge>
                </Space>

            </Row>
        )
    }
}

export default Header