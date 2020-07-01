import React from 'react';
import { FileView } from '@/components/antd';

class Word extends React.PureComponent {

    render() {
        return (<FileView filePath={window.location.origin + '/chinese.docx'} fileType={'docx'} />)
    }
}

export default Word