import { FEEDLIST_LIST } from '../constants/constants.jsx';

export function storeFeedList(items) {
  const action = {
    type: FEEDLIST_LIST,
    items
  }
  return action;
}
