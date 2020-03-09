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
// renderUser = (user) =>
// {
//   console.log("user================>",this.props.myname)


//    this.state.data.map((myname) => {
//     return( 
//      <li>{myname.username}</li>
//     )
//   })

// else(console.log('mapping error'))  
// }

  render()
  {
    const mydata=this.props.myname
      return (
  
    <div className="App">
      {mydata}
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
