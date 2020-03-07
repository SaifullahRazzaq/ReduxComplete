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
               console.log("resp===>",resp[0].name)
               dispatch({
                   type:'Change username',
                   payload:resp[1].name
            })
           })
       })
   }
 }
 export
 {
     anothername
 }
