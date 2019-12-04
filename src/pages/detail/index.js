import React,{Component} from 'react';
import { DetailWrapper,Header,Content } from './style'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
class Detail extends Component{
    render(){
        const {title} =this.props;
        return (
            <DetailWrapper>
            <Header>
              {title}
            </Header>
            <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
            </Content>
          </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData(this.props.match.params.id);
        
    }
    
}

const mapStateToProps= (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
  });



const mapDispatchToProps = (dispatch)=>({
    changeHomeData(id) {
       
      dispatch(actionCreators.getDetail(id));
    },
   
  });
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));