import { createRequestActionType } from '../create-request-action-type/create-request-action-type';
import { REQUEST_ACTION_SUFFIXES } from '../../constants/request-action-suffixes';

export const createRequestActionSuccessType = prefix =>
  createRequestActionType(prefix, REQUEST_ACTION_SUFFIXES.SUCCESS);
