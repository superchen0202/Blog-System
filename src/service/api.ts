import axios from "axios";
import { getAuthToken, setAuthToken } from './utils';

// const baseURL = 'http://localhost:3000';
const baseURL = 'https://student-json-api.lidemy.me';

export type User = {
    username: string,
    password: string,
};

// /comments
export const loadComments = async () => {
    try{
        const response = await axios.get(`${baseURL}/comments`);
        return response.data;    
    }
    catch(err){
        const error = err as Error;
        throw new Error(error.message); 
    }
};

export const sendComments = async (content: string) => {
    try{
        const response = await axios.post(`${baseURL}/comments`,
        {
          author: 'Daniel',
          content,
          createdAt: Date.now(),  //`${new Date().toISOString().split('T')[0]} ${new Date().toTimeString().split(' ')[0]}`,
        });
        return response.data;
    }
    catch(err){
        const error = err as Error;
        throw new Error(error.message);
    }
};

// /posts
export const loadPosts = async () => {
    try{
        const response = await axios.get(`${baseURL}/posts?_sort=createdAt&_order=desc`);
        return response.data;    
    }
    catch(err){
        const error = err as Error;
        throw new Error(error.message); 
    }
};

// /post/:id
export const loadPost = async (id: string) => {
    try{
        const response = await axios.get(`${baseURL}/posts?id=${id}`);
        return response.data;    
    }
    catch(err){
        const error = err as Error;
        throw new Error(error.message); 
    }
};

//--------------------------------------------

//登入

export const login = async (user: User) => {
    
    try{
        const response = await axios.post(`${baseURL}/login`, user);
        console.log(response);

        // ERROR
        if(response.data.ok === 0){
            return response.data.message;
        }
    
        // 成功的話就把 token 存到 localStorage
        setAuthToken(response.data.token);
        // return response.data;
    }
    catch(err){
        const error = err as Error;
        console.log(error);
        throw new Error(error.message);
    }
};

// 身分驗證
export const getMe = async () => {
    // 從 localStorage 取得 token
    const token = getAuthToken();

    try{
        const response = await axios.get(`${baseURL}/me`,{
            headers: {
                authorization: `Bearer ${token}`,
            }
        });

        console.log(response.data);
        return response.data;    
    }
    catch(err){
        const error = err as Error;
        console.log(error);
        throw new Error(error.message); 
    }
};