import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as filesActions from 'redux/modules/files';

@connect(
  state => ({
    listLoading: state.files.listLoading,
    listLoaded: state.files.listLoaded,
    listLoadError: state.files.listLoadError,
    pathName: state.files.pathName,
    documentsList: state.files.documentsList,
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
    pathName: PropTypes.string,
  }

  componentWillMount() {
    this.props.getList('demo/');
  }

  formatBytes(bytes, decimals) {
    if (bytes === 0) return '0 Octet';
    const kilo = 1000;
    const dm = decimals + 1 || 3;
    const sizes = ['Octet', 'ko', 'mo', 'go', 'to', 'po', 'eo', 'zo', 'yo'];
    const unity = Math.floor(Math.log(bytes) / Math.log(kilo));
    return parseFloat((bytes / Math.pow(kilo, unity)).toFixed(dm)) + ' ' + sizes[unity];
  }

  clickItem = (event) => {
    if (event.currentTarget.getAttribute('type') === 'd') {
      this.props.getList(event.currentTarget.getAttribute('name'));
    }
  }

  render() {
    const {
      listLoaded,
      listLoading,
      documentsList,
      pathName,
    } = this.props;
    const styles = require('./DocumentsExplorer.scss');

    return (
      <div className={styles.container}>
        <h5>
          <a onClick={this.clickItem} type="d" name="demo/">
            Documents
          </a> {pathName.substring(pathName.indexOf('/'))}
        </h5>
        {listLoading &&
          <i className={'fa fa-refresh fa-spin'}/>
        }
        {listLoaded &&
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Modified</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
             {documentsList.map((document, index) => <tr key={index} onClick={this.clickItem} type={document.type} name={pathName + document.name + '/'}>
               <td>
                 <span className={'glyphicon ' + (document.type === 'f' ? 'glyphicon-file' : 'glyphicon-folder-close')}></span> {document.name}
               </td>
               <td>-</td>
               <td>{this.formatBytes(document.size)}</td>
             </tr>
             )}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
