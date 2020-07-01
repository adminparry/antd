import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'umi';

export interface IBread {
    breadData: any[];
    style:Object;
}
class Bread extends React.Component<IBread,{},{}> {


    loop = (ret: any[], item: any)=>{

       
        if(window.location.pathname.indexOf(item.path) > -1){
            if(item.component){
                ret.push(<Breadcrumb.Item key={item.path}><Link to={item.path}>{item.name}</Link></Breadcrumb.Item>)
            }else{
                ret.push(<Breadcrumb.Item key={item.path}>{item.name}</Breadcrumb.Item>)
            }
            
        }
        if(item.routes){
            item.routes.reduce(this.loop, ret)
        }
       
        return ret;
    }
    render() {

        return (
            <Breadcrumb separator={'/'} style={this.props.style}>
                {this.props.breadData.reduce(this.loop,[])}
                


                
            </Breadcrumb>
        )
    }
}

export default Bread