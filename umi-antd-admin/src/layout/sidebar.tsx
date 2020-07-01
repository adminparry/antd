import React, {createContext} from 'react';
import { Menu } from '@/components/antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'umi';
const { Provider, Consumer } = createContext("Sidebar");
export interface ISidebarProps {
    menuData: any[]
}

class Sidebar extends React.PureComponent<ISidebarProps, {}, {}> {
   
    state = {
        defaultOpenKeys: [],
        defaultSelectedKeys: [window.location.pathname]
    }
    componentDidMount(){
        this.props.menuData.forEach(item => {
            if(item.routes){
                if(window.location.pathname.indexOf(item.path) > -1){
                    this.setState({
                        defaultOpenKeys: [item.path]
                    })
                }
            }
        })
    }
    onClick = () => {
        
        (document.documentElement || document.body).scrollTop = 0;
    }
    subMenu = (item: any) => {
        if(item.routes){
           
            return <Menu.SubMenu key={item.path} title={item.name}>
                {item.routes.map(this.subMenu)}
            </Menu.SubMenu>
        }
        if(item.name){
            return <Menu.Item key={item.path}>
                <Link onClick={this.onClick} to={item.path}>{item.name}</Link>
            </Menu.Item>
        }else{
            return null;
        }


        
    }
    render() {
        const { defaultOpenKeys, defaultSelectedKeys} = this.state;

        return (
            <Menu defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys}>
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