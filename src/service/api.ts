import axios from "axios";

const baseURL = 'http://localhost:3000'; 
//const baseURL = 'https://student-json-api.lidemy.me';

// /comments
export const loadComments = async () => {
    try{
        const response = await axios.get(`${baseURL}/comments`);
        // console.log(response.data);
        return response.data;    
    }
    catch(err){
        const error = err as Error;
        // console.log(error);
        throw new Error(error.message); 
    }
};

export const sendComments = async (content: string) => {
    try{
        const response = await axios.post(`${baseURL}/comments`,
        {
          author: 'Daniel',
          content,
          createdAt: `${new Date().toISOString().split('T')[0]} ${new Date().toTimeString().split(' ')[0]}`,
        });
        // console.log(response);
        return response.data;
    }
    catch(err){
        const error = err as Error;
        // console.log(error);
        throw new Error(error.message);
    }
};