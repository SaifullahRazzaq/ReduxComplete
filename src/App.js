import React,{Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {anothername, GetComment} from './action/myaction'
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
  this.props.GetComment();
}
renderUser = (user) =>
{
if(this.props.myname)
{

  return this.props.myname.map((item) => {
    console.log("item---->",item)
    return( 
<ul>

      <li>Username:{item.username}</li>
      <li>Email:{item.email}</li>
      <li>website:{item.website}</li>
      <li>Address:{item.email}</li>
  
</ul>
      )
    })
  }
  else {
  console.log("mapping erroor")
  }


}

renderComment()
{
  if(this.props.mycomment)
{

  return this.props.mycomment.map((item) => {
    return( 
<ul>

      <li>PostId:{item.postId}</li>
      <li>Username:{item.name}</li>
      <li>Email:{item.body}</li>
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
      return (
  
    <div className="App">
<h1>User Data</h1>
  {this.renderUser()} 
  <h2>Comment Data</h2>
  {this.renderComment()}  
    </div>
 );
  }

}


const mapStateToProps = (state) =>
{

  return {

    myname:state.name.user,
    mycomment:state.Comment.comment

    
  }
  

}

const mapDispatchToProps= (dispatch) =>{

  return {
    changename:(name)=>{dispatch(anothername(name))},
    GetComment:()=>{dispatch(GetComment())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
