import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {DownloadButton} from 'components';

@reduxForm({
  form: 'selector',
  fields: ['cover', 'team', 'benefits', 'thanks']
})
export default
class SelectorForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    showDownloadButton: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    merging: PropTypes.bool,
    errorMessage: PropTypes.object
  }

  render() {
    const {
      fields: {cover, team, benefits, thanks},
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
          <div className="form-group">
            <label htmlFor="cover" className="col-sm-4">1. Cover</label>
            <div className="col-sm-8">
              <input type="checkbox" id="cover" {...cover}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="team" className="col-sm-4">2. Who we are?</label>
            <div className="col-sm-8">
              <input type="checkbox" id="team" {...team}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="benefits" className="col-sm-4">3. What we help you do and what your benefits are?</label>
            <div className="col-sm-8">
              <input type="checkbox" id="benefits" {...benefits}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="thanks" className="col-sm-4">4. Thank you & legal mentions</label>
            <div className="col-sm-8">
              <input type="checkbox" id="thanks" {...thanks}/>
            </div>
          </div>
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

