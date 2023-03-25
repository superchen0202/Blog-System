import axios from "axios";
import baseURL from "./enviroment";

export const sendNewPost = async (user: User, {title, content}: {title: string, content: string}) => {
  try{
    const response = await axios.post(`${baseURL}/posts`,{
      title,
      body: content,
      createdAt: Date.now(),
      author: user.username,
      userID: user.id,
    });
    return response.data;
  }
  catch(err){
    const error = err as Error;
    console.log(error);
    throw new Error(error.message);
  }
}