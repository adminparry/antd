import React from 'react';
import FileViewer  from 'react-file-viewer';

const file = 'http://example.com/image.png'
const type = 'png'

export interface IFileView {
    fileType: string;
    filePath: string;

}
class MyComponent extends React.PureComponent<IFileView, {}, {}> {
  render() {
    return (
      <FileViewer
        { ...this.props}
        
        errorComponent={<div>occur a error</div>}
        onError={this.onError}/>
    );
  }

  onError(e) {
    console.log(e, 'error in file-viewer');
  }
}

export default MyComponent