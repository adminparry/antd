import React from 'react';
import { Input } from 'antd';
import config from './input.config';
import { clone, merge } from 'lodash';
import { InputProps } from 'antd/lib/input';


class GlobalInput extends React.PureComponent<InputProps,{},{}> {

    render(){
        return (
        <Input { ...merge(clone(config), this.props)} />
        )
    }
}

export default GlobalInput