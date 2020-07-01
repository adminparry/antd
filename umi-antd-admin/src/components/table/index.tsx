import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import {assign} from 'lodash'
import config from './config';
class GTable extends React.PureComponent<TableProps<any>,{},{}> {

    render(){

        return (
            <Table {...assign(config, this.props)} />
        )
    }
}

export default GTable