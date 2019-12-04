import { fromJS } from 'immutable';
import {CHANGE_LOGIN,LOGOUT} from "./constants";

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return state.set('login', true);

      case LOGOUT:
        return state.set('login', action.value);
    default:
        return state
}
};