import React from 'react';
import { FileView } from '@/components/antd';

class Excel extends React.PureComponent {

    render() {
        return (<FileView filePath={window.location.origin + '/sql.xlsx'} fileType={'xlsx'} />)
    }
}

export default Excel