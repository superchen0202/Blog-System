import axios from "axios";
import baseURL from "./environment";

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
export const updatePost = async (postID: number, {title, body}: {title: string, body: string}) => {
  try{
    const response = await axios.patch(`${baseURL}/posts/${postID}`,{
      title,
      body
    });
    console.log("postID: ",postID);
    console.log(response);
    return response.data;
  }
  catch(err){
    const error = err as Error;
    console.log(error);
    throw new Error(error.message);
  }
}