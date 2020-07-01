import React from 'react';
import { Layout,  } from 'antd';
import Sidebar from './sidebar';
import config from './config';
import Head from './header';
import Foot from './footer';
import Bread from './bread';
// import './index.less';
const { Sider, Header, Content, Footer } = Layout;
export interface ILayoutProps {
    routes: any[]
}
class BasicLayout extends React.PureComponent<ILayoutProps, {}, {}> {

    render() {
        const routes = this.props.routes.find(item => item.path == config.home).routes;

        return (
            <Layout style={{ minHeight: '100vh' }}>

                <Sider theme={'light'}>
                    <Header style={{ background: 'none' }}>
                        antd-admin
                    </Header>
                    <Sidebar menuData={routes} />
                </Sider>
                <Layout style={{ background: 'white' }}>
                    {/* 这个header默认是黑色的好恶心 */}
                    <Header style={{ background: 'none' }}>
                        <Head />
                    </Header>
                    <Content>
                        <Bread breadData={routes}/>
                        {this.props.children}
                    </Content>
                    <Footer style={{ background: 'white' }}>
                        <Foot />
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;