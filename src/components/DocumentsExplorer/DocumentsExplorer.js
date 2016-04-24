import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';

import * as filesActions from 'redux/modules/files';

@connect(
  state => ({
    listLoading: state.files.listLoading,
    listLoaded: state.files.listLoaded,
    listLoadError: state.files.listLoadError,
    pathName: state.files.pathName,
    documentsList: state.files.documentsList,
    uploading: state.files.uploading,
    uploaded: state.files.uploaded,
  }),
  filesActions,
)
export default class DocumentsExplorer extends Component {
  static propTypes = {
    listLoading: PropTypes.bool,
    listLoaded: PropTypes.bool,
    listLoadError: PropTypes.object,
    documentsList: PropTypes.array,
    getList: PropTypes.func,
    upload: PropTypes.func,
    uploading: PropTypes.bool,
    uploaded: PropTypes.bool,
    pathName: PropTypes.string,
    mountingPoint: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.props.getList(this.props.mountingPoint);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.uploading === true && newProps.uploading === false) {
      this.props.getList(this.props.pathName);
    }
  }

  onDrop = (files) => {
    this.props.upload(this.props.pathName, files[0]);
  }

  clickItem = (event) => {
    if (event.currentTarget.getAttribute('type') === 'd') {
      this.props.getList(event.currentTarget.getAttribute('name'));
    }
  }

  formatBytes(bytes, decimals) {
    if (bytes === 0) return '0 Octet';
    const kilo = 1000;
    const dm = decimals + 1 || 3;
    const sizes = ['Octet', 'ko', 'mo', 'go', 'to', 'po', 'eo', 'zo', 'yo'];
    const unity = Math.floor(Math.log(bytes) / Math.log(kilo));
    return parseFloat((bytes / Math.pow(kilo, unity)).toFixed(dm)) + ' ' + sizes[unity];
  }

  render() {
    const {
      listLoaded,
      listLoading,
      documentsList,
      pathName,
      uploading,
      mountingPoint,
    } = this.props;
    const styles = require('./DocumentsExplorer.scss');

    return (
      <div className={styles.container}>
        <div className="row">
          <div className="col-sm-4">
            <h5>
              <a onClick={this.clickItem} type="d" name={mountingPoint}>
                Documents
              </a> {pathName.substring(pathName.indexOf('/'))}
            </h5>
          </div>
          <div className="col-sm-4 col-sm-offset-4">
            <Dropzone onDrop={this.onDrop} className={styles.dropzone} multiple={false}>
              <h5>
                {uploading && <i className={'fa fa-refresh fa-spin'}/>}&nbsp;
                Click here to upload a file&nbsp;
                <span className="glyphicon glyphicon-upload"></span>
              </h5>
            </Dropzone>
          </div>
        </div>
        {listLoading && <i className={'fa fa-refresh fa-spin'}/>}
        {listLoaded &&
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Modified</th>
                <th>Size</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
             {documentsList.map((document, index) =>
              <tr
                key={index}
                onClick={this.clickItem}
                type={document.type}
                name={pathName + document.name + '/'}
              >
               <td>
                 <span className={'glyphicon ' + (document.type === 'f' ? 'glyphicon-file' : 'glyphicon-folder-close')}></span> {document.name}
               </td>
               <td>-</td>
               <td>{this.formatBytes(document.size)}</td>
               <td>{document.type === 'f' &&
                 <a href={`/${mountingPoint}/files/${pathName}${document.name}`}>
                   <i className={"fa fa-download"}/>
                 </a>
               }</td>
             </tr>
             )}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
