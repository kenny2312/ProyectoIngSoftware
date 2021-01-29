import axios from "axios";
import authHeader from "./auth-Header";

const API_URL = "https://localhost:44392/api/User/";

const getListUser = async () => {
 
let list=[];
var config = {
  method: 'get',
  url: API_URL + "List",
  headers:  authHeader()
   
  
};
 await axios(config).then((response)=>{

    list =response.data;

  }).catch((error)=>console.log(error));
  return list;
};

const postUser = async (data) => {
    
    let config = {
        method: 'post',
        url: API_URL + "add",
        data: data,
        headers: authHeader()
    };
    await axios(config).then((response) => {

      console.log(response.data);

    }).catch((error) => console.log(error));
    return "ok";


};

const deleteUser = async  (data) => {
  let config = {
    method: 'delete',
    url: API_URL + "delete?id="+data,
    
    headers: authHeader()
};
await axios(config).then((response) => {
  return response.data;
  console.log(response.data);

}).catch((error) => console.log(error));
return "mal";

};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getListUser,
  deleteUser,
  getModeratorBoard,
    getAdminBoard,
    postUser,
};