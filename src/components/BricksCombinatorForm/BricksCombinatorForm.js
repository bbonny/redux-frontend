import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

import {BricksSelector, DownloadButton, PresentationConfigurator} from 'components';

export const fields = [
  'configurator.clientName',
  'configurator.salesName',
  'configurator.dividers',
  'bricks[].name',
  'bricks[].column',
  'bricks[].checked',
];


@reduxForm({
  form: 'bricks_combinator',
  fields
})
export default
class BricksCombinatorForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    mergeInProgress: PropTypes.bool,
    readyToDownload: PropTypes.bool,
    downloadUrl: PropTypes.string,
    slideSlices: PropTypes.array,
    mergeError: PropTypes.string,
  }

  componentWillMount() {
    const {
      fields: {bricks},
      slideSlices
    } = this.props;
    slideSlices.forEach((slice) => {
      bricks.addField({
        name: slice.name,
        checked: slice.checked,
        column: slice.column
      });
    });
  }

  render() {
    const {
      fields: {bricks, configurator},
      handleSubmit,
      mergeInProgress,
      readyToDownload,
      downloadUrl,
      mergeError,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <br />
        <div className="row">
          <div className="col-sm-9 col-xs-12">
            <PresentationConfigurator fields={configurator}/>
          </div>
          <div className="col-sm-3 col-xs-12">
            <div className="row">
              <div className="col-sm-12 col-xs-12">
                <button className={'btn btn-success col-sm-12 col-xs-12'} onClick={handleSubmit}>
                  <i
                    className={'fa fa-refresh' + (mergeInProgress ? ' fa-spin' : '')}
                  /> Generate
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-xs-12">
                { mergeError && <span className="text-danger">{mergeError}</span>}
                { readyToDownload &&
                  <div>
                    <br/>
                    <DownloadButton path={downloadUrl}/>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <br/>
        <BricksSelector bricks={bricks}/>
      </form>
    );
  }
}

