import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {BricksSelector, DownloadButton} from 'components';

export const fields = [
  'bricks[].name',
  'bricks[].checked'
];

@reduxForm({
  form: 'bricks_combinator',
  fields
})
export default
class SelectorForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    showDownloadButton: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    merging: PropTypes.bool,
    errorMessage: PropTypes.object,
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
        checked: false
      });
    });
  }

  render() {
    const {
      fields: {bricks},
      handleSubmit,
      merging,
      showDownloadButton,
      errorMessage,
    } = this.props;

    let refreshClassName = 'fa fa-refresh';
    if (merging) {
      refreshClassName += ' fa-spin';
    }

    return (
      <div>
        <h2>Which parts do you want to include in your presentations?</h2>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {bricks.map((brick, index) => <div key={index}>
            <BricksSelector {...brick}/>
          </div>)}
          <div className="form-group">
            <div className="col-sm-10">
              <button className={'btn btn-success'} onClick={handleSubmit}>
                <i className={refreshClassName} /> Generate
              </button>
              &nbsp;
              {showDownloadButton &&
                <DownloadButton path="/apoffice/files/temp/merged.pptx"/>
              }
              {errorMessage.message &&
                <div className={'text-danger'}>{errorMessage.message}</div>
              }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

