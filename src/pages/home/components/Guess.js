import React,{Component} from 'react';
import { GuessItem, Wrapper,Guesstitle } from '../style';
import {connect} from 'react-redux';
class Gues extends Component{
    render(){
        const {list} =this.props;
        return (
            <Wrapper>
                 <Guesstitle>
                 <div> 推荐作者</div>
                <div> 换一批</div>
                 </Guesstitle>
                {
                    list.map((item)=>(
                        <GuessItem key={item.get('id')}>
                        <img className='yuan'
                             src={item.get('imgUrl')}
                             alt=''
                        />
                        <div>
                            <p Style="font-weight:bold;COLOR: #111;font-size:14px;">{item.get('usre')}</p>
                            {item.get('desc')}
                        </div>
                        <div>
                            <p Style="font-weight:bold;COLOR: #42c02e;font-size:14px;">   + 关注</p>
                           
                        </div>
                        </GuessItem>
                         
                        
                    ))
                }

            
            </Wrapper>
           
        )
    }
    
}


const mapState =(state)=>({
    list: state.getIn(['home','GuessList']),
   
  });

  
export default connect(mapState)(Gues);