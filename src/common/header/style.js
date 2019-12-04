import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
/**绝对定位*/
    position: relative;
     height: 58px;
     border-bottom: 1px solid #f0f0f0;
`;

export const Logo =styled.div`
position: absolute;
top: 0;
left: 0;
display: block;
width:100px;
height: 56px;
background: url(${logoPic}); 
background-size: contain; 
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;
export const NavItem=styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color:#333;
&.left {
  float: left;
}
&.right {
  float: right;
  color:#969696;
}
&.active {
  color: #ea6f5a;
}

`;

export const NavSearch=styled.input.attrs(
    {
      placeholder: '搜索'
    })`
      width：160ox;
      height: 38px;
      padding: 0 30px 0 20px;
      margin-top:9px;
      margin-left: 20px;
      box-sizing: border-box;
      border: none;
      outline: none;
      border-radius: 19px;
      background: #eee;
      font-size: 14px;
      color: #666;
      &::placeholder {
         color: #999;
      }
      &.focused {
         width: 300px;
      }
      &.slide-enter {
       //动画开始的时候
        transition: all .6s ease-out;
      }
      &.slide-enter-active {
       //当动画执行的时候
        width: 300px;
      }
      &.slide-exit {
      //当动画收起的时候
        transition: all .6s ease-out;
      }
      &.slide-exit-active {
        width: 220px;
      }
    `;
  export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    
  `;


  export const SearchWrapper = styled.div`
  position: relative;
  float: left;
   // background: yellow;
  .zoom {
    position:absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    // background: green;
    text-align: center;
    &.focused {
       background: #777;
       color: #fff;
    }
    
   
  } 
`;

  export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
 
  
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  fond-size: 14px;
  &.reg {
     color: #ec6149;
  }
  &.writting {
     color: #fff;
     background: #ec6149;
  }
`;

export const SearchInfo=styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0,0,0,.2);
background: #fff;
&:after {
  content: ' ';
  position: absolute;
  top: -17px;
  left: 28px;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent transparent #ffffff;
  border-style: solid;
  border-width: 10px;
}
`;


export const SearchInfoTittle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor:pointer;
  .spin {
     display: block;//只有在这种状态下才能有rotate效果
     float: left;
     font-size: 12px;
     margin-right: 2px;
     //所有动画效果都执行两秒 动画效果ease-in 
     transition: all .2s ease-in;
     //旋转角度
     // transition: rotate(0deg);
     transform-origin: center center;   
  }
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;