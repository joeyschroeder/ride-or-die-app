import { createAction } from 'redux-actions';
import { createRequestActionTypes } from '../create-request-action-types/create-request-action-types';

export const createRequestActions = prefix => {
  const types = createRequestActionTypes(prefix);
  const actions = types.map(type => createAction(type));

  const [startType, successType, failureType] = types;
  const [startAction, successAction, failureAction] = actions;

  return {
    start: {
      type: startType,
      action: startAction
    },
    success: {
      type: successType,
      action: successAction
    },
    failure: {
      type: failureType,
      action: failureAction
    }
  };
};
