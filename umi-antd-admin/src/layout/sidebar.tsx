import React, { createContext } from 'react';
import { Menu } from '@/components/antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'umi';
export interface ISidebarProps {
    menuData: any[]
}

class Sidebar extends React.PureComponent<ISidebarProps, {}, {}> {

    state = {
        defaultOpenKeys: [],
        defaultSelectedKeys: [window.location.pathname]
    }
    findOpenKeys = (data) => {
        data.forEach(item => {
            if (item.routes) {

                if (window.location.pathname.indexOf(item.path) > -1) {
                    this.setState({
                        defaultOpenKeys: [...this.state.defaultOpenKeys, item.path]
                    })
                }
                this.findOpenKeys(item.routes);

            }

        })
    }
    UNSAFE_componentWillMount () {
        this.findOpenKeys(this.props.menuData);


    }
    onClick = () => {

        (document.documentElement || document.body).scrollTop = 0;
    }
    loop = (item: any) => {
        if (item.routes) {

            return <Menu.SubMenu key={item.path} title={item.title}>
                {item.routes.map(this.loop)}
            </Menu.SubMenu>
        }
        if (item.title) {
            return <Menu.Item key={item.path}>
                <Link onClick={this.onClick} to={item.path}>{item.title}</Link>
            </Menu.Item>
        } else {
            return null;
        }



    }
    render() {
        const { defaultOpenKeys, defaultSelectedKeys } = this.state;

        return (
            <Menu defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys}>

                {this.props.menuData.map(this.loop)}
            </Menu>
        )

    }
}


export default Sidebar