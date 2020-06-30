import React from 'react';
import { Layout } from 'antd';
import './index.less';
const {Sider,  Header, Content, Footer} = Layout;

class Home extends React.PureComponent {

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                
                <Sider theme={'light'}>Sider</Sider>
                <Layout>
                    {/* 这个header默认是黑色的好恶心 */}
                    <Header style={{background: 'none'}}>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Home;