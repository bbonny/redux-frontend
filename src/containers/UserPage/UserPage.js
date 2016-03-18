import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {SelectorForm} from 'components';
import {fields} from '../../components/SelectorForm/SelectorForm';

import Helmet from 'react-helmet';
import * as slidesActions from 'redux/modules/slides';

const slideSlices = [
  {
    name: 'Cover',
    path: 'demo/1._STACK_cover.pptx',
    column: 0,
    start: 0,
    count: 1
  },
  {
    name: 'Team',
    path: 'demo/2._STACK_who_we_are.pptx',
    column: 0,
    start: 0,
    count: 1
  },
  {
    name: 'Benefits',
    path: 'demo/3._STACK_what_we_help_you_do_&_what_your_benefits_are.pptx',
    column: 0,
    start: 0,
    count: 2
  },
  {
    name: 'Thanks',
    path: 'demo/4._STACK_thank_you_&_legal_mentions.pptx',
    column: 1,
    start: 0,
    count: 1
  },
  {
    name: 'Cover',
    path: 'demo/1._STACK_cover.pptx',
    column: 1,
    start: 0,
    count: 1
  },
  {
    name: 'Team',
    path: 'demo/2._STACK_who_we_are.pptx',
    column: 2,
    start: 0,
    count: 1
  },
  {
    name: 'Benefits',
    path: 'demo/3._STACK_what_we_help_you_do_&_what_your_benefits_are.pptx',
    column: 3,
    start: 0,
    count: 2
  },
  {
    name: 'Thanks',
    path: 'demo/4._STACK_thank_you_&_legal_mentions.pptx',
    column: 3,
    start: 0,
    count: 1
  }
];


@connect(
  state => ({
    merged: state.slides.merged,
    merging: state.slides.merging,
    error: state.slides.error
  }),
  slidesActions)
export default class UserPage extends Component {
  static propTypes = {
    merged: PropTypes.bool,
    merging: PropTypes.bool,
    error: PropTypes.object,
    merge: PropTypes.func
  }

  transformFormData = (data) => {
    const result = {
      outputPath: 'temp/merged.pptx',
      inputSlides: []
    };
    slideSlices.forEach((slice, index) => {
      if (data.bricks[index].checked) {
        result.inputSlides.push(slice);
      }
    });
    return result;
  }

  handleSubmit = (data) => {
    this.props.merge(this.transformFormData(data));
  }

  render() {
    const styles = require('./UserPage.scss');
    return (
      <div className={styles.home}>
        <Helmet title="User Mode"/>
        <div className="container">
          <SelectorForm
            fields={fields}
            onSubmit={this.handleSubmit}
            showDownloadButton={this.props.merged}
            merging={this.props.merging}
            errorMessage={this.props.error}
            slideSlices={slideSlices}
           />
        </div>
      </div>
    );
  }
}
