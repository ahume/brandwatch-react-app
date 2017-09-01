import { createAction, handleActions } from 'redux-actions';

export const COMMITS_DELETE_REQUESTED = 'commits delete requested';
export const COMMITS_FETCH_REQUESTED = 'commits fetch requested';
export const COMMITS_FETCH_SUCCEEDED = 'commits fetch succeeded';
export const COMMITS_FETCH_FAILED = 'commits fetch failed';

export const commitsFetchFailed = createAction(COMMITS_FETCH_FAILED, (message) => ({ message }));
export const commitsFetchRequested = createAction(COMMITS_FETCH_REQUESTED);
export const commitsDeleteRequested = createAction(COMMITS_DELETE_REQUESTED, (id) => ({ id }));
export const commitsFetchedSucceded = createAction(
  COMMITS_FETCH_SUCCEEDED,
  (commits) => ({
    commits: commits.map(({ url, sha, commit, author }) => ({
      url,
      id: sha,
      body: commit.message,
      user: {
        login: author.login,
        avatar: author.avatar_url,
        url: author.html_url,
      },
    })),
  })
);

const initialState = {
  fetching: false,
  commits: [],
};

export default handleActions({
  [COMMITS_FETCH_REQUESTED]: () => ({
    commits: initialState.commits,
    fetching: true,
  }),
  [COMMITS_FETCH_SUCCEEDED]: (state, { payload }) => ({
    fetching: false,
    commits: payload.commits,
  }),
  [COMMITS_FETCH_FAILED]: () => ({
    fetching: false,
    commits: initialState.commits,
  }),
  [COMMITS_DELETE_REQUESTED]: (state, { payload }) => ({
    commits: state.commits.filter(({ id }) => id !== payload.id ),
  }),
}, initialState);
