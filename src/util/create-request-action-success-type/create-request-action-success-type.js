import { REQUEST_ACTION_TYPES_SUFFIXES } from '../../constants/request-action-types-suffixes';
import { createRequestActionType } from '../create-request-action-type/create-request-action-type';

export const createRequestActionSuccessType = prefix =>
  createRequestActionType(prefix, REQUEST_ACTION_TYPES_SUFFIXES.SUCCESS);
