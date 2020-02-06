import { handleActions } from 'redux-actions';
import { createRequestActionSuccessType } from '../create-request-action-success-type/create-request-action-success-type';

export const createRequestReducer = (prefix, defaultState = {}) => {
  const successActionType = createRequestActionSuccessType(prefix);
  const reducer = handleActions({ [successActionType]: (state, { payload }) => payload || state }, defaultState);

  return reducer;
};
