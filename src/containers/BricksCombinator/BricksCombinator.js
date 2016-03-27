import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {BricksCombinatorForm} from 'components';
import * as slidesActions from 'redux/modules/slides';
import {fields} from '../../components/BricksCombinatorForm/BricksCombinatorForm';


@connect(
  state => ({
    mergeInProgress: state.slides.mergeInProgress,
    readyToDownload: state.slides.readyToDownload,
    downloadUrl: state.slides.downloadUrl,
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
    downloadUrl: PropTypes.string,
    mergeError: PropTypes.string,
    merge: PropTypes.func,
    setDownloadUrl: PropTypes.func,
    getBricks: PropTypes.func,
    bricks: PropTypes.array,
    loading: PropTypes.bool,
    readyToShow: PropTypes.bool,
  }

  componentWillMount() {
    this.props.getBricks();
  }

  transformFormData = (data) => {
    const slugify = require('slugify');
    const dateFormat = require('dateformat');

    const createdAt = dateFormat(Date(), 'yyyymmdd');
    const fileName = slugify(data.configurator.clientName.concat(createdAt));

    const result = {
      outputPath: `temp/${fileName}.pptx`,
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
    const transformedData = this.transformFormData(data);
    this.props.merge(transformedData);
    this.props.setDownloadUrl(`/apoffice/files/${transformedData.outputPath}`);
  }

  render() {
    const {
        mergeInProgress,
        readyToDownload,
        downloadUrl,
        bricks,
        readyToShow,
        mergeError
    } = this.props;
    return (
      <div className="combinator-container">
        {readyToShow &&
          <BricksCombinatorForm
            fields={fields}
            onSubmit={this.handleSubmit}
            mergeInProgress={mergeInProgress}
            readyToDownload={readyToDownload}
            downloadUrl={downloadUrl}
            slideSlices={bricks}
            mergeError={mergeError}
          />
        }
      </div>
    );
  }
}
