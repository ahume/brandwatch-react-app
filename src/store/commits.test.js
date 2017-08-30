import reducer, {
  commitsFetchRequested,
  commitsFetchedSucceded,
  commitsFetchFailed,
  commitsDeleteRequested,
} from './commits';

export const commits = [{
  author: { login: 'bw', avatar_url: '/bw.png', html_url: 'a.html' },
  sha: 1,
  url: '/1',
  commit: { message: 'test' },
}];

describe('commits', () => {
  test('requesting the commits', () => {
    expect(reducer({ commits, fetching: false }, commitsFetchRequested()))
      .toEqual({ commits: [], fetching: true });
  });

  test('receiving the commits', () => {
    expect(reducer({ commits: [], fetching: true }, commitsFetchedSucceded(commits)))
      .toEqual({ commits: [{
        url: commits[0].url,
        id: commits[0].sha,
        body: commits[0].commit.message,
        user: {
          avatar: commits[0].author.avatar_url,
          login: commits[0].author.login,
          url: commits[0].author.html_url,
        },
      }], fetching: false });
  });

  test('receiving the commits failure', () => {
    expect(reducer({ commits, fetching: true }, commitsFetchFailed()))
      .toEqual({ commits: [], fetching: false });
  });

  test('marking commit as read', () => {
    expect(reducer({ commits: [{ id: 1 }] }, commitsDeleteRequested(1)))
      .toEqual({ commits: [] });
  });
});
