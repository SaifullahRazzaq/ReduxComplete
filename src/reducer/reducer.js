const mystate=
{
    name:'Saifulllah',
    Fathername:'Razzaq',
    Age:20
}

const reduce = (state =mystate,action) =>
{
if(action.type== 'Change username')
{
    console.log("payload=========>",action.payload)
    return {
        ...state,
        name:action.payload
    }
}
    return state;

}
export default reduce;
