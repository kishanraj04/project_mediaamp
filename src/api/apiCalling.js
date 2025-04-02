import axios from "axios"


export const apiCalling =async  (option)=>
{
    
    try
    {
        const response = await axios(option)
        return response
        
    }catch(error)
    {
        return error
    }

  
}