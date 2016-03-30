import React, {Component, PropTypes} from 'react';


export default class GenerateButton extends Component {
  static propTypes = {
    'handleSubmit': PropTypes.func.isRequired,
    'mergeInProgress': PropTypes.bool,
    'mode': PropTypes.string,
  }

  render() {
    const {handleSubmit, mergeInProgress, mode} = this.props; // eslint-disable-line no-shadow
    return (
      <button className={'btn btn-success col-sm-12 col-xs-12'} onClick={handleSubmit}>
        <i
          className={'fa fa-refresh' + (mergeInProgress ? ' fa-spin' : '')}
        /> { mode === 'edit' ? 'Test your presentation' : 'Generate your presentation' }
      </button>
    );
  }
}

