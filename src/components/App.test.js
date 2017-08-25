import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from './App';

const sandbox = sinon.sandbox.create();
let props;

function render(props) {
  return shallow(<App { ...props } />);
}

beforeEach(() => {
  props = {
    count: 1,
    onAdd: sandbox.stub(),
    onRemove: sandbox.stub(),
  };
});

afterEach(() => {
  sandbox.restore();
});

describe('App', () => {
  test('clicking the add button calls the onAdd property', () => {
    render(props).find('[data-tid="add-product"]').prop('onClick')();
    expect(props.onAdd.calledOnce).toBeTruthy();
  });

  test('clicking the remove button calls the onRemove property', () => {
    render(props).find('[data-tid="remove-product"]').prop('onClick')();
    expect(props.onRemove.calledOnce).toBeTruthy();
  });
});
