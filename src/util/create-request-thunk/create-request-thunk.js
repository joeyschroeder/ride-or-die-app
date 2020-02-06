import { createRequestActions } from '../create-request-actions/create-request-actions';

export const createRequestThunk = (requestFunction, prefix) => async dispatch => {
  const { start, success, failure } = createRequestActions(prefix);
  dispatch(start.action());

  try {
    const response = await requestFunction();
    dispatch(success.action(response));
  } catch (error) {
    dispatch(failure.action(error));
    throw error;
  }
};
