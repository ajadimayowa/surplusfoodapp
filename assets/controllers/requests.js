import React from "react";
import axios from "axios";

export const sendList =(userList) => {
    axios.post('https://surplus-auth-dev-default-rtdb.firebaseio.com/userlist.json'),
    userList

}

export const createUser =(userInfo)=>{
    console.log(userInfo)
    axios.post('https://surplus-auth-dev-default-rtdb.firebaseio.com/users.json', userInfo)
   
}

export const handleLogin = (userInput)=>{
    const success = 'ok'
    return success
    
}