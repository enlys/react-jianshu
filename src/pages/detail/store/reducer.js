import { fromJS } from 'immutable';
import {CHANGE_DETAIL} from "./constants";

const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state
  }
};