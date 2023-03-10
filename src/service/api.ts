import axios from "axios";

const mockAPI = `https://jsonplaceholder.typicode.com/users`;

export const fetchData = () => {

    return axios.get(mockAPI)
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
};