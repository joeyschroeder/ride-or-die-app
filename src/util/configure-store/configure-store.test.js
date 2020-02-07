import * as reducersModule from '../../store/index';
import * as reduxModule from 'redux';
import * as thunkModule from 'redux-thunk';

import { configureStore } from './configure-store';

describe('configureStore', () => {
  const applyMiddlewareReturn = 'test';
  const applyMiddleware = jest.fn(() => applyMiddlewareReturn);
  const createStore = jest.fn();
  const reducers = 'test-1';
  const thunk = 'test';

  reducersModule.reducers = reducers;
  reduxModule.applyMiddleware = applyMiddleware;
  reduxModule.createStore = createStore;
  thunkModule.default = thunk;

  configureStore();

  it('should call createStore with reducers and middleware', () => {
    expect(applyMiddleware).toHaveBeenCalledWith(thunk);
    expect(createStore).toHaveBeenCalledWith(reducers, applyMiddlewareReturn);
  });
});
