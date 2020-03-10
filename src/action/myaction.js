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
   return async (dispatch) =>
   {
    const data=await fetch('https://jsonplaceholder.typicode.com/users');
    const resp=await data.json();
    dispatch({
      type:'Change username',
      payload:resp
    })

      
       
   }
  }

  const GetComment = () =>
  {
    return async (dispatch) =>
    {
     const data=await fetch('https://jsonplaceholder.typicode.com/comments');
     const resp=await data.json();
     dispatch({
       type:'Comment',
       payload:resp
     })
 
       
        
    }
   }







 export
 {
     anothername,
     GetComment
 }
