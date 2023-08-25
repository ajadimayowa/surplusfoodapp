import React from "react";
import axios from "axios";


export const sendList =(userList) => {
    axios.post('https://surplus-auth-dev-default-rtdb.firebaseio.com/userlist.json'),
    userList

}

const API_KEY = 'AIzaSyAegImF2nb4zZGAzRJ5BY7D8uMVKD9kv7M';


export const createUser = async (userInfo)=>{
    // console.log(userInfo)
    const body = {
        ...userInfo,
        returnSecureToken : true
    }
   const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, body);
   console.log(res);
   return res;
   
   
}

