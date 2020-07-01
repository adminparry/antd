import React from 'react';
import { Menu } from 'antd';
import { merge, assign, extend } from 'lodash';
import { MenuProps } from 'antd/lib/menu';
import config from './config';

const { Item, SubMenu } = Menu;

class GMenu extends React.PureComponent<MenuProps, {}, {}> {
    static Item: any;
    static SubMenu: any;


    render() {
        return (
            <Menu {...assign(config, this.props)} />
        )
    }
}

GMenu.Item = Item;
GMenu.SubMenu = SubMenu;

export default GMenu