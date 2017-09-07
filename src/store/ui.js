import { createAction, handleActions } from 'redux-actions';

export const UI_OPEN_CHANGE_PASSWORD_DIALOG = 'ui open change password dialog';
export const UI_CLOSE_CHANGE_PASSWORD_DIALOG = 'ui close change password dialog';

export const uiOpenChangePasswordDialog = createAction(UI_OPEN_CHANGE_PASSWORD_DIALOG);
export const uiCloseChangePasswordDialog = createAction(UI_CLOSE_CHANGE_PASSWORD_DIALOG);


const initialState = {
  isChangePasswordDialogOpen: false,
};

export default handleActions({
  [UI_OPEN_CHANGE_PASSWORD_DIALOG]: (state) => ({
    ...state,
    isChangePasswordDialogOpen: true,
  }),
  [UI_CLOSE_CHANGE_PASSWORD_DIALOG]: (state) => ({
    ...state,
    isChangePasswordDialogOpen: false,
  }),
}, initialState);
