import React, {Component, PropTypes} from 'react';


export default class DownloadButton extends Component {
  static propTypes = {
    'path': PropTypes.string.isRequired,
  }

  render() {
    const {path} = this.props; // eslint-disable-line no-shadow
    return (
      <a href={path} role="button" className={'col-sm-12 col-xs-12 btn btn-default'}>
        <i className={"fa fa-download"}/>&nbsp;Download
      </a>
    );
  }
}

