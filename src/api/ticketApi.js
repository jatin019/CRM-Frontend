import axios from "axios";

export const getAllTickets = () => {
return new Promise(async (resolve, reject) => {
    try{
   const result = await axios.get(
        'http://localhost:3001/v1/ticket',
        {headers: 
            { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhdmlAZ21haWwuY29tIiwiaWF0IjoxNzIxNzM1NDQxLCJleHAiOjE3MjE3MzYzNDF9.4n7ISryQ9k6wmcG2Ruv-TpyucwRQwwPTe1JHP3Y8THk",
            }}        
            )
            resolve(result)
} catch(error){
    reject(error);
}})
    
}
