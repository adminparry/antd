import React from 'react';
import { Row, Col, Carousel } from 'antd';
import './footer.less';

class Footer extends React.PureComponent {

    render() {
        return (
            <>
                <Carousel autoplay>
                    <div>
                        <Row>
                            <Col className={'tc'} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 6 }}><img src={'https://gw.alipayobjects.com/zos/rmsportal/qImQXNUdQgqAKpPgzxyK.svg'} /></Col>
                            <Col className={'tc'} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 6 }}><img src={'https://gw.alipayobjects.com/zos/rmsportal/LqRoouplkwgeOVjFBIRp.svg'} /></Col>
                            <Col className={'tc'} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 6 }}><img src={'https://gw.alipayobjects.com/zos/rmsportal/TLCyoAagnCGXUlbsMTWq.svg'} /></Col>
                            <Col className={'tc'} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 6 }}><img src={'https://gw.alipayobjects.com/zos/rmsportal/HmCGMKcJQMwfPLNCIhOH.svg'} /></Col>

                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col className={'tc'} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 6 }}><img src={'https://gw.alipayobjects.com/zos/rmsportal/aqldfFDDqRVFRxqLUZOk.svg'} /></Col>
                            <Col className={'tc'} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 6 }}><img src={'https://gw.alipayobjects.com/zos/rmsportal/rqNeEFCGFuwiDKHaVaPp.svg'} /></Col>
                            <Col className={'tc'} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 6 }}><img src={'https://gw.alipayobjects.com/zos/rmsportal/FdborlfwBxkWIqKbgRtq.svg'} /></Col>
                            <Col className={'tc'} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 6 }}><img src={'https://gw.alipayobjects.com/zos/rmsportal/coPmiBkAGVTuTNFVRUcg.png'} /></Col>

                        </Row>

                    </div>


                </Carousel>




            </>
        )
    }
}

export default Footer