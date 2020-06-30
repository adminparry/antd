import React from 'react';
import { Menu } from '@/components/antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'umi';

export interface ISidebarProps {
    menuData: any[]
}

class Sidebar extends React.PureComponent<ISidebarProps, {}, {}> {

    subMenu = (item: any) => {
        if(item.routes){
            
            return <Menu.SubMenu key={item.path} title={item.name}>
                {item.routes.map(this.subMenu)}
            </Menu.SubMenu>
        }
        if(item.name){
            return <Menu.Item key={item.path}>
                <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
        }else{
            return null;
        }


        
    }
    render() {

        return (
            <Menu>
                {/* <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                </Menu.Item>
                <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </Menu.SubMenu> */}
                {this.props.menuData.map(this.subMenu)}
            </Menu>
        )

    }
}


export default Sidebar