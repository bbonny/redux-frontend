import React, {Component} from 'react';

export default
class SelectorForm extends Component {
  render() {
    return (
      <div>
        <h2>Which parts do you want to include in your presentations?</h2>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="cover" className="col-sm-4">1. Cover</label>
            <div className="col-sm-8">
              <input type="checkbox" id="cover" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="team" className="col-sm-4">2. Who we are?</label>
            <div className="col-sm-8">
              <input type="checkbox" id="team" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="benefits" className="col-sm-4">3. What we help you do and what your benefits are?</label>
            <div className="col-sm-8">
              <input type="checkbox" id="benefits" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="thanks" className="col-sm-4">4. Thank you & legal mentions</label>
            <div className="col-sm-8">
              <input type="checkbox" id="thanks"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <div className="btn btn-success">
                <i className="fa fa-paper-plane"/> Generate
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

