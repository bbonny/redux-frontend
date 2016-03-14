import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import Dropzone from 'react-dropzone';
import * as filesActions from 'redux/modules/files';

@connect(
  state => ({
    uploaded: state.files.uploaded,
    uploading: state.files.uploading,
    error: state.files.error
  }),
  filesActions)
export default class AdminPage extends Component {
  static propTypes = {
    upload: PropTypes.func
  }

  onDrop = (files) => {
    console.log('Received files: ', files[0]);
    this.props.upload(files[0]);
  }

  render() {
    const styles = require('./AdminPage.scss');

    return (
      <div>
        <Helmet title="Admin Mode"/>
        <div className="container">
          <Dropzone onDrop={this.onDrop} multiple={false} className={styles.dropzone}>
            <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
        </div>
      </div>
    );
  }
}
