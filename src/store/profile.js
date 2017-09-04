import { createAction, handleActions } from 'redux-actions';

export const PROFILE_RETRIEVED = 'profile received';

const initialState = {
  email: null,
  id: null,
  name: null,
  imageUrl: null,
};

export const profileFetchSucceeded = createAction(
  PROFILE_RETRIEVED,
  (profile) => ({
    email: profile.email,
    id: profile.sub,
    name: profile.name,
    imageUrl: profile.imageUrl,
  }),
  () => ({ mixpanel: { eventName: 'App loaded' } })
);

export default handleActions({
  [PROFILE_RETRIEVED]: (state, { payload }) => ({
    ...payload,
  }),
}, initialState);
