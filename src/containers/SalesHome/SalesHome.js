import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {SelectorForm} from 'components';
import Helmet from 'react-helmet';
import * as slidesActions from 'redux/modules/slides';

@connect(
  state => ({
    merged: state.slides.merged,
    merging: state.slides.merging,
    error: state.slides.error
  }),
  slidesActions)
export default class SalesHome extends Component {
  static propTypes = {
    merged: PropTypes.bool,
    merging: PropTypes.bool,
    error: PropTypes.object,
    merge: PropTypes.func
  }

  transformFormData = (data) => {
    const fileMapping = {
      cover: {
        path: 'demo/1._STACK_cover.pptx',
        start: 0,
        count: 1
      },
      team: {
        path: 'demo/2._STACK_who_we_are.pptx',
        start: 0,
        count: 1
      },
      benefits: {
        path: 'demo/3._STACK_what_we_help_you_do_&_what_your_benefits_are.pptx',
        start: 0,
        count: 2
      },
      thanks: {
        path: 'demo/4._STACK_thank_you_&_legal_mentions.pptx',
        start: 0,
        count: 1
      }
    };
    const result = {
      outputPath: 'temp/merged.pptx',
      inputSlides: []
    };
    ['cover', 'team', 'benefits', 'thanks'].forEach((slice) => {
      if (data[slice]) {
        result.inputSlides.push(fileMapping[slice]);
      }
    });
    return result;
  }

  handleSubmit = (data) => {
    console.log('Data submitted! ' + JSON.stringify(data));
    this.props.merge(this.transformFormData(data));
  }

  render() {
    const styles = require('./SalesHome.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Sales mode"/>
        <div className="container">
          <SelectorForm
            onSubmit={this.handleSubmit}
            showDownloadButton={this.props.merged}
            merging={this.props.merging}
            errorMessage={this.props.error}
           />
        </div>
      </div>
    );
  }
}
