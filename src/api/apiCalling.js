import axios from "axios"


export const apiCalling =async  (option)=>
{
    
    try
    {
        const response = await axios(option)
        console.log(response);
        
    }catch(error)
    {
        return error
    }

  
}