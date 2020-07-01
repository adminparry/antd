import React from 'react';
import ReactEcharts from 'echarts-for-react';

export interface IEchartsProps {
    option: Object
}
class Echarts extends React.PureComponent<IEchartsProps,{},{}> {

    render(){

        return <ReactEcharts  {...this.props} />
    }
}

export default Echarts