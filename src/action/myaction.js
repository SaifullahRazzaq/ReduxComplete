//parameter k through

//  const anothername = (name) =>
//  {
//      return {
//         type:'Change username',
//         payload:name
//      }
//  }
//  export default anothername;

const anothername = () =>
 {
   return (dispatch) =>
   {
     fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
           res.json().then(resp=>{
               dispatch({
                   type:'Change username',
                   payload:resp
            })
           })
       })
   }
 }
 export
 {
     anothername
 }
