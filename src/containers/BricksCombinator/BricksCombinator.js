import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {BricksCombinatorForm} from 'components';
import * as slidesActions from 'redux/modules/slides';
import {fields} from '../../components/BricksCombinatorForm/BricksCombinatorForm';


@connect(
  state => ({
    mergeInProgress: state.slides.mergeInProgress,
    readyToDownload: state.slides.readyToDownload,
    bricks: state.slides.bricks,
    loading: state.slides.loading,
    readyToShow: state.slides.readyToShow,
    mergeError: state.slides.mergeError,
  }),
  slidesActions,
)
export default class BricksCombinator extends Component {
  static propTypes = {
    mergeInProgress: PropTypes.bool,
    readyToDownload: PropTypes.bool,
    mergeError: PropTypes.string,
    merge: PropTypes.func,
    getBricks: PropTypes.func,
    bricks: PropTypes.array,
    loading: PropTypes.bool,
    readyToShow: PropTypes.bool,
  }

  componentWillMount() {
    this.props.getBricks();
  }

  transformFormData = (data) => {
    const result = {
      outputPath: 'temp/merged.pptx',
      inputSlides: []
    };
    this.props.bricks.forEach((slice, index) => {
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
    const {mergeInProgress, readyToDownload, bricks, readyToShow, mergeError} = this.props;
    return (
      <div className="combinator-container">
        {readyToShow &&
          <BricksCombinatorForm
            fields={fields}
            onSubmit={this.handleSubmit}
            mergeInProgress={mergeInProgress}
            readyToDownload={readyToDownload}
            slideSlices={bricks}
            mergeError={mergeError}
          />
        }
      </div>
    );
  }
}
