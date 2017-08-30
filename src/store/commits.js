import { makeActionCreator } from '../utils/actions';

export const COMMITS_DELETE_REQUESTED = 'commits delete requested';
export const COMMITS_FETCH_REQUESTED = 'commits fetch requested';
export const COMMITS_FETCH_SUCCEEDED = 'commits fetch succeeded';
export const COMMITS_FETCH_FAILED = 'commits fetch failed';

export const commitsDeleteRequested = makeActionCreator(COMMITS_DELETE_REQUESTED, 'id');
export const commitsFetchRequested = makeActionCreator(COMMITS_FETCH_REQUESTED);
export const commitsFetchedSucceded = makeActionCreator(COMMITS_FETCH_SUCCEEDED, 'commits');
export const commitsFetchFailed = makeActionCreator(COMMITS_FETCH_FAILED, 'message');

const initialState = {
  fetching: false,
  commits: [],
};

export default function commits(state = initialState, { payload, type }) {
  switch (type) {
  case COMMITS_FETCH_REQUESTED:
    return {
      ...state,
      commits: initialState.commits,
      fetching: true,
    };
  case COMMITS_FETCH_SUCCEEDED:
    return {
      ...state,
      fetching: false,
      commits: payload.commits.map(({ url, sha, commit, author }) => ({
        url,
        id: sha,
        body: commit.message,
        user: {
          login: author.login,
          avatar: author.avatar_url,
          url: author.html_url,
        },
      })),
    };
  case COMMITS_FETCH_FAILED:
    return {
      ...state,
      fetching: false,
      commits: initialState.commits,
    };
  case COMMITS_DELETE_REQUESTED:
    return {
      ...state,
      commits: state.commits.filter(({ id }) => id !== payload.id ),
    };
  default:
    return state;
  }
}
