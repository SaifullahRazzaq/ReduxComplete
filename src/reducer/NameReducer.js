const Namereduce = (state = [] , action) =>
{
    if(action.type== 'Change username')
    console.log("payload=========>",action.payload)
{
    return {
        ...state,
        user:action.payload
    }
    return state;
}

}
export default Namereduce;
