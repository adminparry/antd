import React from 'react';
import { Layout } from 'antd';
import Sidebar from './sidebar';
import config from './config';


// import './index.less';
const {Sider,  Header, Content, Footer} = Layout;
export interface ILayoutProps {
    routes: any[]
}
class BasicLayout extends React.PureComponent<ILayoutProps, {}, {}> {

    render() {
        console.log(this.props.routes.find(item => item.path == config.home).routes)
        return (
            <Layout style={{minHeight: '100vh'}}>
                
                <Sider theme={'light'}>
                    <Sidebar menuData={this.props.routes.find(item => item.path == config.home).routes} />
                </Sider>
                <Layout>
                    {/* 这个header默认是黑色的好恶心 */}
                    <Header style={{background: 'none'}}>Header</Header>
                    <Content>{this.props.children}</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;