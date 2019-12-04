import React,{Component} from 'react';
import {RecommendWrapper, RecommendItem} from '../style';
import {connect} from 'react-redux';

class Recommend extends Component{
    
    render(){
        const {list}=this.props;
        return (
            <RecommendWrapper>
        {
          list.map((item)=>{
            return (
              <RecommendItem key={item.get('id')}>
                <img
                  className='memter-pic'
                  src={item.get('imgUrl')}
                  alt=''
                />
              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
        )
    }
    
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home','recommendList'])
  });
  export default connect(mapStateToProps)(Recommend);