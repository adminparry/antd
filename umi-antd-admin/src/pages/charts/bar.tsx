
import React from 'react';
import { Echarts} from '@/components/antd';
import { connect } from 'umi';


// @ts-ignore
@connect(({charts}) => ({
    charts: charts.line
}))
class Bar extends React.PureComponent {

    option = (data) => ({
        xAxis: {
            type: 'category',
            data: data.map(item => item.time)
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data.map(item => item.value),
            type: 'bar'
        }]
    });
   
    componentDidMount(){
        this.props.dispatch({
            type: 'charts/chartLine',
            payload: {
                year: 2020
            }
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

export default Bar;
