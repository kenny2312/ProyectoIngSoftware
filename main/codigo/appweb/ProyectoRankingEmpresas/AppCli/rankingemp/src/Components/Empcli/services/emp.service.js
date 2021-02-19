import axios from "axios";
import authHeader from "../../../services/auth-Header";

const API_URL = "https://localhost:44392/api/Cargos/";
const API_URL2 = "https://localhost:44392/api/Empresa/";
const getListUser = async (id) => {
 
let list=[];
var config = {
  method: 'get',
  url: API_URL + "List?id="+id,
  headers:  authHeader()
   
  
};
 await axios(config).then((response)=>{

    list =response.data;

  }).catch((error)=>console.log(error));
  return list;
};


const postUser = async (data) => {
    console.log(data)
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

const GetUser = async  (data) => {
let obj = {};
let config = {
  method: 'get',
  url: API_URL + ""+data,
  
  headers: authHeader()
};
await axios(config).then((response) => {

obj = response.data;


}).catch((error) => console.log(error));
return obj;

};
const GetUser2 = async  (data) => {
  let obj = {};
  let config = {
    method: 'get',
    url: API_URL2 + "empcli?id="+data,
    
    headers: authHeader()
  };
  await axios(config).then((response) => {
  
  obj = response.data;
  
  
  }).catch((error) => console.log(error));
  return obj;
  
  };
const UpdateUser = async  (data) => {

let config = {
  method: 'put',
  url: API_URL + "update",
  data: data,
  headers: authHeader()
};
await axios(config).then((response) => {

console.log(response)


}).catch((error) => console.log(error));
return "ok";

};

export default {
  getListUser,
  deleteUser,
  GetUser,
  GetUser2,
  UpdateUser,
    postUser,
};