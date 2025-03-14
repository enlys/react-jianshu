import React,{Component} from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTittle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'
class Header extends Component{


    getListArea(){
        const {focused,list,page,totalPage,handleMouseEnter,handleMouseLeave,mouseIn,handelChangePage}=this.props;
        const jsList=list.toJS();
        const pagelist=[];
        if(jsList.length){
            for(let i=(page-1)*10;i<page*10;i++){
                pagelist.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
       
      
      
        if (focused ||mouseIn ){
          return(
            <SearchInfo
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <SearchInfoTittle>热门搜索
            <SearchInfoSwitch  onClick={()=> handelChangePage(page, totalPage,this.spinIcon)}>
            <i ref={(icon)=> {this.spinIcon = icon}} className="iconfont spin">&#xe600;</i>
                换一批</SearchInfoSwitch>
            </SearchInfoTittle>
            <SearchInfoList>
            {
             pagelist
            }            
             </SearchInfoList>
            </SearchInfo>
          )
        }else {
          return null;
        }
      }



    render(){
        const {focused,handelInputFocus,handleInputBlur,list,login,logout}=this.props;
        return(
            <HeaderWrapper>
              <Link to="/">
                <Logo/>
                </Link>
                 <Nav>
                 <Link to="/">   <NavItem className="left active">首页</NavItem> </Link>
                     <NavItem className="left">下载App</NavItem>
                     {
          login ?
            <NavItem   onClick={logout}  className='right'>退出</NavItem> :
            <Link to='/login'>
            <NavItem className='right'>登录</NavItem>
            </Link>
        }
                     <NavItem className="right"> <i className="iconfont">&#xe602;</i></NavItem>
                     <SearchWrapper>
                     <CSSTransition
                     in={this.props.focused}
                     timeout={600}
                     classNames="slide"
                    >
                     <NavSearch
                     className={focused?'focused':''}
                     onFocus={()=>handelInputFocus(list)}
                     onBlur={handleInputBlur}
                     ></NavSearch>
                      </CSSTransition>
                     <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe625;</i>
                     {
                         this.getListArea()
                     }
                     </SearchWrapper>
                     
                    
                 </Nav>
                 <Addition>
                 <Link to='/write'>
                     <Button className="writting"> <i className="iconfont">&#xe616;</i> 写文章</Button>
                     </Link>
                     <Button className="reg">注册</Button>
                 </Addition>
            </HeaderWrapper>
          
        )
    }
}







const mapStateToProps = (state) => {
    
   
    return {
        focused: state.getIn(['header', 'focused']),
        list :state.getIn(['header','list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login','login'])
    }
  };
  
  const mapDispatchToProps = (dispatch) =>
  {
    return {
        handelInputFocus(list){
           
            if(list.size===0){
                dispatch(actionCreators.getList());
            }
          
           
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
          },
          handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
          },
          handelChangePage(page, totalPage,spin) {
            // console.log(spin);
            //原始角度等于 spin transform的值  replace(/[^0-9]/ig,'') 如果transform的值不是0-9的数字就替换为空
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            console.log(spin.style.transform);
           if (originAngle){
             //如果originAngle存在的话让它以10进制的方式转化成数字
             originAngle = parseInt(originAngle, 10);
           } else {
             originAngle = 0;
           }
            spin.style.transform = 'rotate(' + (originAngle + 360)+'deg)';
            if (page < totalPage){
              dispatch(actionCreators.changePage(page+1))
            }else{
              dispatch(actionCreators.changePage(1))
            }
          },
          logout() {
            dispatch(loginActionCreators.logout());
          }
    }
  };






export default connect(mapStateToProps, mapDispatchToProps)(Header);

