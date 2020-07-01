
import React from 'react';
import { Echarts} from '@/components/antd';


// import './index.less';

class Bar extends React.PureComponent {

    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'bar'
        }]
    };
   
    
    render() {
        return (
            <>
            <Echarts option={this.option} />
            </>
            
        )
    }
}

export default Bar;
