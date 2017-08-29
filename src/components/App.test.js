import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from './App';

const sandbox = sinon.sandbox.create();
let props;
let options;

function render(props, options) {
  return shallow(<App { ...props } />, options);
}

beforeEach(() => {
  props = {
    count: 1,
    onAdd: sandbox.stub(),
    onRemove: sandbox.stub(),
  };
  options = {
    context: {
      brandwatchAuthGetProfile: sandbox.stub(),
      brandwatchAuthLogout: sandbox.stub(),
    },
  };
});

afterEach(() => {
  sandbox.restore();
});

describe('App', () => {
  test('clicking the add button calls the onAdd property', () => {
    render(props, options).find('[data-tid="add-product"]').prop('onClick')();
    expect(props.onAdd.calledOnce).toBeTruthy();
  });

  test('clicking the remove button calls the onRemove property', () => {
    render(props, options).find('[data-tid="remove-product"]').prop('onClick')();
    expect(props.onRemove.calledOnce).toBeTruthy();
  });
});
