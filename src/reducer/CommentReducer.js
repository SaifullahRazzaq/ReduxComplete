const Commentreduce = (state =[],action) =>
{
    // console.log("props========>",this.props)
    if(action.type=='Comment')
    {
        return {
            ...state,
            comment:action.payload
        }
    }
    
    return state;


}
export default Commentreduce;
