import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../api/commits';
import {
  commitsFetchedSucceded,
  commitsFetchFailed,
  COMMITS_FETCH_REQUESTED,
} from '../store/commits';

export function* fetchCommits() {
  try {
    const commits = yield call(Api.fetchCommits);
    yield put(commitsFetchedSucceded(commits));
  } catch ({ message }) {
    yield put(commitsFetchFailed(message));
  }
}

export function* watchFetchCommits() {
  yield takeEvery(COMMITS_FETCH_REQUESTED, fetchCommits);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchCommits),
  ]);
}
