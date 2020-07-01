import React from 'react';
import { Tree  } from 'antd';
import { assign } from 'lodash';
import config from './config';

class GTree extends React.PureComponent {

    render(){

        return <Tree {...assign(config, this.props)} />
    }
}

export default GTree