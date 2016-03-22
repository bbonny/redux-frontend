import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

import {BricksSelector} from 'components';
import {DownloadButton} from 'components';
import {PresentationConfigurator} from 'components';

export const fields = [
  'configurator.clientName',
  'configurator.salesName',
  'configurator.templateName',
  'configurator.dividers',
  'bricks[].name',
  'bricks[].column',
  'bricks[].checked'
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
    slideSlices: PropTypes.array
  }

  componentWillMount() {
    const {
      fields: {bricks},
      slideSlices
    } = this.props;
    slideSlices.forEach(function addSlice(slice) {
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
    } = this.props;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <br />
        <div className="form-group">
          <div className="col-sm-10">
            <button className={'btn btn-success'} onClick={handleSubmit}>
              <i
                className={'fa fa-refresh' + (mergeInProgress ? ' fa-spin' : '')}
              /> Generate
            </button>&nbsp;&nbsp;
            { readyToDownload && <DownloadButton path="/apoffice/files/temp/merged.pptx"/> }
          </div>
        </div>
        <PresentationConfigurator fields={configurator}/>
        <BricksSelector bricks={bricks}/>
      </form>
    );
  }
}
