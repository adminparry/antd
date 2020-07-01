import React from 'react';
import { Input } from '@/components/antd';
import { Space, Avatar, Badge, Row } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

class Header extends React.PureComponent {

    render() {
        return (
            <Row>
                <Space style={{ flex: 1 }}>
                    <Input prefix={<SearchOutlined />} />

                    <Avatar shape={'circle'} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />

                </Space>
                <Space>
                    <Badge count={1}>
                        <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge>
                </Space>

            </Row>
        )
    }
}

export default Header