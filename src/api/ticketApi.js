import axios from "axios";

export const getAllTickets = () => {
return new Promise(async (resolve, reject) => {
    try{
   const result = await axios.get(
        'http://localhost:3001/v1/ticket',
        {headers: 
            { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhdmlAZ21haWwuY29tIiwiaWF0IjoxNzIxOTIwMDA4LCJleHAiOjE3MjE5MjA5MDh9.EEmJIX1AKxgUCjpIPzKv1rVOPYBrzSU7dNh7lyUwg6w",
            }}        
            )
            resolve(result)
} catch(error){
    reject(error);
}})
    
}
