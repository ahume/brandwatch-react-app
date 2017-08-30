import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Commit from './Commit';

const sandbox = sinon.sandbox.create();
let props;

function render(props) {
  return shallow(<Commit { ...props } />);
}

beforeEach(() => {
  props = {
    body: 'test',
    id: '1',
    user: {
      avatar: '/a.png',
      login: 'A',
    },
    onDeleteClick: sandbox.stub(),
  };
});

afterEach(() => {
  sandbox.restore();
});

describe('Commit', () => {
  test('clicking the remove button calls the onDeleteClick property', () => {
    render(props).find('[data-tid="delete"]').prop('onClick')();
    expect(props.onDeleteClick.calledOnce).toBeTruthy();
  });
});
