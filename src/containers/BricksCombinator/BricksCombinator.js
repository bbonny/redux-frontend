import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {BricksCombinatorForm} from 'components';
import * as slidesActions from 'redux/modules/slides';
import {fields} from '../../components/BricksCombinatorForm/BricksCombinatorForm';


const slideSlices = [
  {
    name: 'Cover',
    path: 'demo/1._STACK_cover.pptx',
    column: 0,
    checked: true,
    start: 0,
    count: 1
  },
  {
    name: 'Team',
    path: 'demo/2._STACK_who_we_are.pptx',
    column: 0,
    checked: false,
    start: 0,
    count: 1
  },
  {
    name: 'Benefits',
    path: 'demo/3._STACK_what_we_help_you_do_&_what_your_benefits_are.pptx',
    column: 0,
    checked: true,
    start: 0,
    count: 2
  },
  {
    name: 'Thanks',
    path: 'demo/4._STACK_thank_you_&_legal_mentions.pptx',
    column: 1,
    checked: true,
    start: 0,
    count: 1
  },
  {
    name: 'Cover',
    path: 'demo/1._STACK_cover.pptx',
    column: 1,
    checked: false,
    start: 0,
    count: 1
  },
  {
    name: 'Team',
    path: 'demo/2._STACK_who_we_are.pptx',
    column: 2,
    checked: true,
    start: 0,
    count: 1
  },
  {
    name: 'Benefits',
    path: 'demo/3._STACK_what_we_help_you_do_&_what_your_benefits_are.pptx',
    column: 3,
    checked: false,
    start: 0,
    count: 2
  },
  {
    name: 'Thanks',
    path: 'demo/4._STACK_thank_you_&_legal_mentions.pptx',
    column: 3,
    checked: true,
    start: 0,
    count: 1
  }
];

@connect(
  state => ({
    mergeInProgress: state.slides.mergeInProgress,
    readyToDownload: state.slides.readyToDownload,
  }),
  slidesActions,
)
export default class BricksCombinator extends Component {
  static propTypes = {
    mergeInProgress: PropTypes.bool,
    readyToDownload: PropTypes.bool,
    merge: PropTypes.func,
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
    return (
      <div className="combinator-container">
        <BricksCombinatorForm
           fields={fields}
            onSubmit={this.handleSubmit}
            mergeInProgress={this.props.mergeInProgress}
            readyToDownload={this.props.readyToDownload}
            slideSlices={slideSlices}
        />
      </div>
    );
  }
}
