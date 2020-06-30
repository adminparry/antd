import React from 'react';
import { Tree  } from 'antd';
import { merge } from 'lodash';
import config from './config';

class GTree extends React.PureComponent {

    render(){

        return <Tree {...merge(config, this.props)} />
    }
}