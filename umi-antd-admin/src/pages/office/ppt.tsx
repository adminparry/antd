import React from 'react';
import { FileView } from '@/components/antd';

class PPT extends React.PureComponent {

    render() {
        return (<FileView filePath={window.location.origin + '/power.pptx'} fileType={'pptx'} />)
    }
}

export default PPT