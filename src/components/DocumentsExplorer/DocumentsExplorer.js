import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as filesActions from 'redux/modules/files';

@connect(
  state => ({
    listLoading: state.files.listLoading,
    listLoaded: state.files.listLoaded,
    listLoadError: state.files.listLoadError,
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
  }

  componentWillMount() {
    this.props.getList('demo');
  }

  render() {
    const {
      listLoaded,
      documentsList,
    } = this.props;
    const styles = require('./DocumentsExplorer.scss');

    return (
      <div className={styles.container}>
        <h5>Documents:</h5>
        {listLoaded &&
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Modified</th>
              </tr>
            </thead>
            <tbody>
             {documentsList.map((document, index) => <tr key={index}>
               <td>{document}</td>
               <td>-</td>
             </tr>
             )}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
