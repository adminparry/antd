import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import {merge,clone} from 'lodash'
import config from './config';
class GTable extends React.PureComponent<TableProps<any>,{},{}> {

    render(){

        return (
            <Table {...merge(clone(config), this.props)} />
        )
    }
}

export default GTable