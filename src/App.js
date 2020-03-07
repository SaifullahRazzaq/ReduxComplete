import React,{Component} from 'react';
import {connect} from 'react-redux'
import {anothername} from './action/myaction'
class App extends Component {
  constructor()
  {
    super();
    this.state=
    {

    }

  }
  render()
  {   return (
    <div className="App">
 <h1>Hello user {this.props.myname}</h1>
  <button onClick={()=>{
    console.log("checkheree===========>",this.props)
    this.props.changename()}}>Change</button>
    </div>
 );
  }
}
const mapStateToProps = (state) =>
{
  return {
    myname:state.name
  }

}

const mapDispatchToProps= (dispatch) =>{
  console.log("dispatch======>",dispatch)
  return {
    changename:(name)=>{dispatch(anothername(name))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
