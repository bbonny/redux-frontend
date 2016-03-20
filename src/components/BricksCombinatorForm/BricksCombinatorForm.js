import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {BricksSelector} from 'components';

export const fields = [
  'bricks[].name',
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
    merging: PropTypes.bool,
    slideSlices: PropTypes.array
  }

  componentDidMount() {
    const {
      fields: {bricks},
      slideSlices
    } = this.props;
    slideSlices.forEach(function addSlice(slice) {
      bricks.addField({
        name: slice.name,
        checked: false,
      });
    });
  }

  render() {
    const {
      fields: {bricks},
      handleSubmit,
      merging,
    } = this.props;

    let refreshClassName = 'fa fa-refresh';
    if (merging) {
      refreshClassName += ' fa-spin';
    }

    return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {bricks.map((brick, index) => <div key={index}>
            <BricksSelector {...brick}/>
          </div>)}
          <div className="form-group">
            <div className="col-sm-10">
              <button className={'btn btn-success'} onClick={handleSubmit}>
                <i className={refreshClassName} /> Generate
              </button>
            </div>
          </div>
        </form>
    );
  }
}

