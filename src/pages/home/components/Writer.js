import React,{Component} from 'react';
import { WriterWrapper } from '../style'
import xxx from '../../../statics/xxx.png'
class Writer extends Component{
    render(){
        return (
            <WriterWrapper>
                <img alt=''
                src={xxx}
                className='Writer-pic'/>
                <div>
               <p Style="font-weight:bold;color: #111;"> 下载简书手机APP</p>
随时随地发现和创作内容
                </div>
               
            </WriterWrapper>
        )
    }
    
}
export default Writer;