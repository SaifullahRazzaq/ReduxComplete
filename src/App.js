import React,{Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {anothername} from './action/myaction'
import { conditionalExpression } from '@babel/types';
class App extends Component {
  constructor()
  {
    super();
    this.state=
    {
      data:[
       { 
       username:'saif',
       username:'saif',
       username:'saif',
       username:'saif',
       username:'saif',
      }
      ]

    }

  }
componentDidMount()
{
  this.props.changename();
  this.setState({data:this.props.myname})
}
renderUser = (user) =>
{
  console.log("user================>",this.props.myname)
if(this.props.myname)
{

  return this.props.myname.map((item) => {
    console.log("item---->",item)
    return( 
<ul>

      <li>Username:{item.username}</li>
      <li>Email:{item.email}</li>
      <li>Phone:{item.phone}</li>
      <li>Address:{item.email}</li>
  
</ul> 
      )
    })
  }
  else {
  console.log("mapping erroor")
  }


}

  render()
  {
//    const mydata=this.props.myname
      return (
  
    <div className="App">
  {this.renderUser()}   
    </div>
 );
  }

}


const mapStateToProps = (state) =>
{
console.log("state=====>",state.name.user)
  return {

    myname:state.name.user,
    mywish:state.wish
    
  }
  

}

const mapDispatchToProps= (dispatch) =>{

  return {
    changename:(name)=>{dispatch(anothername(name))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
