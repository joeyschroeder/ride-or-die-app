import { REQUEST_ACTION_SUFFIXES } from '../../constants/request-action-suffixes';
import { createRequestActionType } from '../create-request-action-type/create-request-action-type';

export const createRequestActionTypes = prefix =>
  [REQUEST_ACTION_SUFFIXES.START, REQUEST_ACTION_SUFFIXES.SUCCESS, REQUEST_ACTION_SUFFIXES.FAILURE].map(suffix =>
    createRequestActionType(prefix, suffix)
  );
