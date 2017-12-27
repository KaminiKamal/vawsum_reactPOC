import { FEEDLIST_LIST } from '../constants/constants.jsx';
export default (state = [], action) => {
  switch(action.type) {
    case FEEDLIST_LIST:
      const { items } = action;console.log("inside reducer",items);
      return items;
    default:
      return state;
  }
}
