import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import { expect} from 'chai';

import { BricksColumn } from 'components';

describe('BricksColumn', () => {

  const bricks = [
    {
      checked: {value: true},
      name: {value: "Coucou"},
    },
    {
      checked: {value: false},
      name: {value: "Potato"},
    },
    {
      checked: {value: true},
      name: {value: "Banana"},
    },
  ]

  const renderer = renderIntoDocument(
    <BricksColumn bricks={bricks} />
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it('should render correctly', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render with correct value (first brick)', () => {
    const text = dom.getElementsByTagName('label')[0].textContent;
    expect(text).to.equal(bricks[0].name.value);
  });

  it('should render with correct value (second brick)', () => {
    const text = dom.getElementsByTagName('label')[1].textContent;
    expect(text).to.equal(bricks[1].name.value);
  });

  it('should have the correct number of bricks', () => {
    const labels = dom.getElementsByTagName('label');
    expect(labels.length).to.equal(bricks.length);
  });
});
