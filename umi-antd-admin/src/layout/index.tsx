import React from 'react';
import { Layout, Drawer,Radio } from 'antd';
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

    state = {
        visible: false,
        theme: 'light'
    }
    onClick = () => {
        this.setState({
            visible: true
        })
    }
    close = () => {
        this.setState({
            visible: false
        })
    }
    onChange = (e) => {
        this.setState({
            theme: e.target.value
        })
    }
    render() {
        const routes = this.props.routes.find(item => item.path == config.home).routes;

        return (
            <Layout style={{ minHeight: '100vh' }}>

                <Sider theme={this.state.theme}>
                    <Header style={{ background: 'none', borderRight: '1px solid', borderBottom: '1px solid' }}>
                        antd-admin
                    </Header>
                    <Sidebar menuData={routes} />
                </Sider>
                <Layout style={{ background: this.state.theme  == 'light'?'white':'#001529' }}>
                    {/* 这个header默认是黑色的好恶心 */}
                    <Header style={{ background: 'none', borderBottom: '1px solid' }}>
                        <Head drawer={this.onClick} />
                    </Header>
                    <Content>
                        <Bread style={{ borderBottom: '1px solid', padding: 20 }} breadData={routes} />
                        <div style={{ padding: 20 }}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ background: this.state.theme  == 'light'?'white':'#001529', borderTop: '1px solid' }}>
                        <Foot />
                    </Footer>
                </Layout>
                <Drawer visible={this.state.visible} onClose={this.close} >
                   
                    <Radio.Group onChange={this.onChange} value={this.state.theme}>
                        <Radio value={'dark'}>dark</Radio>
                        <Radio value={'light'}>light</Radio>
                        
                    </Radio.Group>
                </Drawer>
            </Layout>
        )
    }
}

export default BasicLayout;