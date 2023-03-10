import axios from "axios";

// const baseURL = `https://student-json-api.lidemy.me`;
const baseURL = `http://localhost:3000`;

export const fetchComments = async () => {

    try{
        const response = await axios.get(`${baseURL}/comments`);
        console.log(response.data);
        return response.data;    
    }
    catch(err){
        const error = err as Error;
        // console.log(error);
        throw new Error(error.message); 
    }
};