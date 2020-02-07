import { createRequestActionSuccessType } from '../create-request-action-success-type/create-request-action-success-type';
import { handleActions } from 'redux-actions';

export const createRequestReducer = (prefix, defaultState = {}) => {
  const successActionType = createRequestActionSuccessType(prefix);
  const reducer = handleActions({ [successActionType]: (state, { payload }) => payload || state }, defaultState);

  return reducer;
};
