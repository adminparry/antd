import React from 'react';
import { Input } from 'antd';
import config from './input.config';
import { merge } from 'lodash';
import { InputProps } from 'antd/lib/input';


class GlobalInput extends React.PureComponent<InputProps,{},{}> {

    render(){
        return (
        <Input { ...merge(config, this.props)} />
        )
    }
}

export default GlobalInput