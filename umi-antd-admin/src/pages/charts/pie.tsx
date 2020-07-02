
import React from 'react';
import { Echarts} from '@/components/antd';
import { connect } from 'umi';


// import './index.less';
// @ts-ignore
@connect(({ charts }) => ({
    charts: charts.pie
}))
class Home extends React.PureComponent {

    option = (data) => ({
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: data.map(item=> item.time)
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data.map(item => ({
                    value:item.value,
                    name: item.time
                }))
            }
        ]
    });
    componentDidMount(){
        this.props.dispatch({
            type:'charts/chartPie'
        })
    }
    render() {
        return (
            <>
            <Echarts option={this.option(this.props.charts)} />
            </>
            
        )
    }
}

export default Home;