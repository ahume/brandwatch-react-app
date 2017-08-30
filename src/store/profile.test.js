import reducer, { profileFetchSucceeded } from './profile';

export const profile = {
  email: 'a@b.co',
  name: 'Ace',
  imageUrl: 'http://a.png',
};

describe('profile', () => {
  test('receiving the profile', () => {
    expect(reducer(null, profileFetchSucceeded(profile)))
      .toEqual({
        email: profile.email,
        name: profile.name,
        imageUrl: profile.imageUrl,
      });
  });
});
