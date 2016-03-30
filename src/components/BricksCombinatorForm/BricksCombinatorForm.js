import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

import {BricksSelector, DownloadButton, GenerateButton, PresentationConfigurator} from 'components';

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
    mergeError: PropTypes.bool,
    readyToDownload: PropTypes.bool,
    downloadUrl: PropTypes.string,
    slideSlices: PropTypes.array,
    mode: PropTypes.string,
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
      mode,
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
                <GenerateButton
                  handleSubmit={handleSubmit}
                  mergeInProgress={mergeInProgress}
                  mode={mode}
                />
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

