import * as constants from './constants';
import {
    fromJS
} from "immutable";

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {


    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({
                //merge可以同时改变多个数据内容，相当于多次调用set，比set性能更高
                list: action.data,
                totalPage: action.totalPage

            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);

        default:
            return state
    }

}