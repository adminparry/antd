import React from 'react';
import { Button } from 'antd';
import config from './config';
import { merge, clone } from 'lodash';
import { ButtonProps } from 'antd/lib/button';


class GlobalButton extends React.PureComponent<ButtonProps,{},{}> {

    render(){
        return (
        <Button { ...merge(clone(config), this.props)} />
        )
    }
}

export default GlobalButton