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
      <form onSubmit={handleSubmit}>
        <br />
        <div className="row">
          <fieldset className="col-sm-9 col-xs-12">
            <PresentationConfigurator fields={configurator}/>
          </fieldset>
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
            <br/>
            <div className="row">
              <div className="col-sm-12 col-xs-12">
                { readyToDownload && <DownloadButton path="/apoffice/files/temp/merged.pptx"/> }
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

