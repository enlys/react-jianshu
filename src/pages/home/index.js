import React,{PureComponent} from 'react';

import { connect } from 'react-redux';

import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import Guess from './components/Guess'
import { actionCreators } from './store';
import bg from '../../statics/333.jpg'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';



class Home extends PureComponent{



    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                <img alt=''
               className='banner-img'
               src={bg}/>
               <Topic/>
               <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                    <Guess/>
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
            </HomeWrapper>
           
        )
    }
    handleScrollTop() {
        window.scrollTo(0,0);
    
      }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        //移除组件监听事件
        window.removeEventListener('scroll', this.props.changeScrollToShow);
      }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollToShow);
    }
    
}









const mapStateToProps= (state) => ({
    showScroll: state.getIn(['home','showScroll'])
  });



const mapDispatchToProps = (dispatch)=>({
    changeHomeData() {
       
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollToShow(){
      if(document.documentElement.scrollTop > 200){
        
        dispatch(actionCreators.toggleToShow(true));
      }else{
        dispatch(actionCreators.toggleToShow(false));
      }
    }
  });
export default connect(mapStateToProps,mapDispatchToProps)(Home);