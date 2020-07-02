import React from 'react';
import { Echarts } from '@/components/antd';
import { connect } from 'dva';

// import './index.less';
export interface ILineProps {
    charts: any[];
    dispatch: Promise<any>
}
// @ts-ignore
@connect(({ charts }) => ({
    charts: charts.line
}))
class Line extends React.PureComponent<ILineProps, {}, {}> {

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
            type: 'line'
        }]
    })
    componentDidMount() {
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

export default Line;