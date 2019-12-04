 import * as constants from './constants';
 import {
     fromJS
 } from "immutable";
 import jianshuMember from '../../../statics/jianshuMember.png'
 import jianshuCollege from '../../../statics/jianshuCollege.png'
 import copyright from '../../../statics/copyright.png'
 import optimal from '../../../statics/optimal.png'
 import gu1 from '../../../statics/1.webp'
 import gu2 from '../../../statics/2.webp'
 import gu3 from '../../../statics/3.webp'
 import gu4 from '../../../statics/4.webp'
 import gu5 from '../../../statics/5.webp'
 const defaultState = fromJS({
     topicList: [],
     articleList: [],
     recommendList: [{
             id: 1,
             imgUrl: jianshuMember,
         }, {
             id: 2,
             imgUrl: optimal,

         }, {
             id: 3,
             imgUrl: copyright,
         }, {
             id: 4,
             imgUrl: jianshuCollege,
         }

     ],
     GuessList: [{
             id: 1,
             imgUrl: gu1,
             usre: "简书钻",
             desc: "写了197.6k字 · 151.8k喜欢"
         }, {
             id: 2,
             imgUrl: gu2,
             usre: "董克平日记",
             desc: "写了197.6k字 · 151.8k喜欢"
         }, {
             id: 3,
             imgUrl: gu3,
             usre: "Hobbit霍比特人",
             desc: "写了205.9k字 · 151.8k喜欢"
         }, {
             id: 4,
             imgUrl: gu4,
             usre: "阿栈",
             desc: "写了486.2k字 · 111.8k喜欢"
         },
         {
             id: 5,
             imgUrl: gu5,
             usre: "无限猴子",
             desc: "写了416.9k字 · 222.2k喜欢"
         }
     ],
     articlePage: 1,
     showScroll: false
 });
 const changeHomeData = (state, action) => {
     return state.merge({
         topicList: fromJS(action.topicList),
         articleList: fromJS(action.articleList)
     });
 }

 const addHomeListData = (state, action) => {
     return state.merge({
         'articleList': state.get('articleList')
             .concat(action.list),
         //get('articleList'）获取原来的articleList
         //concat(action.list),用concat方法在原来的articleList追加list数据
         'articlePage': action.nextPage
     });
 };

 export default (state = defaultState, action) => {
     switch (action.type) {
         case constants.CHANGE_HOME_DATA:

             return changeHomeData(state, action);
         case constants.ADD_HOME_LIST_DATA:
             return addHomeListData(state, action);
         case constants.TOGGLE_SCROLL_SHOW:
             return state.set('showScroll', action.show);
         default:
             return state
     }
 }