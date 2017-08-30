import { makeActionCreator } from '../utils/actions';

export const PROFILE_RETRIEVED = 'profile received';

const initialState = {
  email: null,
  name: null,
  imageUrl: null,
};

export const profileFetchSucceeded = makeActionCreator(PROFILE_RETRIEVED, 'profile');

export default function profile(state = initialState, { payload, type }) {
  switch (type) {
  case PROFILE_RETRIEVED:
    return {
      ...state,
      email: payload.profile.email,
      name: payload.profile.name,
      imageUrl: payload.profile.imageUrl,
    };
  default:
    return state;
  }
}
