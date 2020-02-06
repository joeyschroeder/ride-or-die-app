import { REQUEST_ACTION_TYPES_SUFFIXES } from '../../constants/request-action-types-suffixes';
import { createRequestActionType } from '../create-request-action-type/create-request-action-type';

export const createRequestActionTypes = prefix =>
  [
    REQUEST_ACTION_TYPES_SUFFIXES.START,
    REQUEST_ACTION_TYPES_SUFFIXES.SUCCESS,
    REQUEST_ACTION_TYPES_SUFFIXES.FAILURE
  ].map(suffix => createRequestActionType(prefix, suffix));
