import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import config from '../../config';
import {SelectorForm} from 'components';
import Helmet from 'react-helmet';
import * as slidesActions from 'redux/modules/slides';

@connect(
  state => ({merged: state.slides.merged}),
  slidesActions)
export default class Home extends Component {
  static propTypes = {
    merged: PropTypes.bool,
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
        count: 1
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
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <h1>{config.app.title}</h1>
            <h2>{config.app.description}</h2>
          </div>
        </div>
        <div className="container">
          <SelectorForm onSubmit={this.handleSubmit}/>
        </div>
        <div className="well text-center">
          Have questions? Ask for help.
        </div>
      </div>
    );
  }
}
