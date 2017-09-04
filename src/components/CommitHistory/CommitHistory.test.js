import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { ProgressInfinite } from 'bw-axiom';
import Commit from './Commit';
import CommitHistory from './CommitHistory';

let props;

function render(props) {
  return shallow(<CommitHistory { ...props } />);
}

beforeEach(() => {
  props = {
    commits: [{ id: '1' }, { id: '2' }],
    fetching: false,
    onDeleteClick: sinon.stub(),
    onLoad: sinon.stub(),
    onRefreshClick: sinon.stub(),
  };
});

describe('CommitHistory', () => {
  test('the data reloads when the refresh button is clicked', () => {
    render(props).find('[data-tid="refresh"]').prop('onClick')();
    expect(props.onRefreshClick.calledOnce).toBeTruthy();
  });

  test('rendering a loading spinner when data is fetching', () => {
    expect(render(props).find(ProgressInfinite).length).toBe(0);
    props.fetching = true;
    expect(render(props).find(ProgressInfinite).length).toBe(1);
  });

  describe('commit list', () => {
    test('it renders a commit component for each commit', () => {
      expect(render(props).find(Commit).length).toBe(2);
    });

    test('it calls to delete the commit when the onDeleteClick property is invoked', () => {
      render(props).find(Commit).at(0).prop('onDeleteClick')();
      expect(props.onDeleteClick.calledOnce).toBeTruthy();
      expect(props.onDeleteClick.firstCall.args).toEqual(['1']);
    });
  });
});
