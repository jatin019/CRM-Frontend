import axios from "axios";

export const getAllTickets = () => {
return new Promise(async (resolve, reject) => {
    try{
   const result = await axios.get(
        'http://localhost:3001/v1/ticket',
        {headers: 
            { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhdmlAZ21haWwuY29tIiwiaWF0IjoxNzIxNzU1MzY0LCJleHAiOjE3MjE3NTYyNjR9.CqqPEqqJy64fv0RiWpe5bvv2nQWDeey7Q7k4lxws3uU",
            }}        
            )
            resolve(result)
} catch(error){
    reject(error);
}})
    
}
