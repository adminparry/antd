import React from 'react';
import { Tree  } from 'antd';
import { merge, clone} from 'lodash';
import config from './config';

class GTree extends React.PureComponent {

    render(){

        return <Tree {...merge(clone(config), this.props)} />
    }
}

export default GTree