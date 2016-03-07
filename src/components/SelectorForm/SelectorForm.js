import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import * as slidesActions from 'redux/modules/slides';

@reduxForm({
  form: 'selector',
  fields: ['cover', 'team', 'benefits', 'thanks'],
})
export default
class SelectorForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  static fileMapping = {
    cover: 'demo/1._STACK_cover.pptx',
    team: 'demo/2._STACK_who_we_are.pptx',
    benefits: 'demo/3._STACK_what_we_help_you_do_&_what_your_benefits_are.pptx',
    thanks: 'demo/4._STACK_thank_you_&_legal_mentions.pptx'
  }

  handleSubmit = (data) => {
    slidesActions.merge(data);
  }

  render() {
    const {
      fields: {cover, team, benefits, thanks},
      } = this.props;

    return (
      <div>
        <h2>Which parts do you want to include in your presentations?</h2>
        <form className="form-horizontal">
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
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={this.handleSubmit}>
                <i className="fa fa-paper-plane"/> Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

