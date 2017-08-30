import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../api/commits';
import {
  commitsFetchedSucceded,
  commitsFetchRequested,
  commitsFetchFailed,
  COMMITS_FETCH_REQUESTED,
} from '../store/commits';
import { commits } from '../store/commits.test';
import { fetchCommits, watchFetchCommits } from './commits';

describe('commits saga', () => {
  describe('fetchCommits', () => {
    test('it handles a successful api call', () => {
      const gen = fetchCommits();
      expect(gen.next().value)
        .toEqual(call(Api.fetchCommits));

      expect(gen.next(commits).value)
        .toEqual(put(commitsFetchedSucceded(commits)));
    });

    test('it handles an unsuccessful api call', () => {
      const message = 'error retrieving';
      const gen = fetchCommits();
      expect(gen.next(commitsFetchRequested).value)
        .toEqual(call(Api.fetchCommits));

      expect(gen.throw({ message }).value)
        .toEqual(put(commitsFetchFailed(message)));
    });
  });

  describe('watchFetchCommits saga', () => {
    test('it takes every result of the fetchCommits saga', () => {
      const gen = watchFetchCommits();
      expect(gen.next().value)
        .toEqual(takeEvery(COMMITS_FETCH_REQUESTED, fetchCommits));
    });
  });
});
