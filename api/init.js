import axios from "axios";
import { apiUrl } from "./host";
import { getValidToken } from "./token";
import Base64 from 'Base64';

const encoded = Base64.btoa('floathhub@gmail.com:e2b1b93e3082485a308992c8c30e06c1');


// Create an axios instance
console.log('Host', apiUrl)
export const useAxios = axios.create({
    baseURL: apiUrl,
    headers: {
        Accept: "application/json",
        "Authorization": `Basic ${encoded}`
    },
});
export const useAxiosForm = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    },
});

export async function setToken() {
    const token = await getValidToken()
    if (token) {
        useAxios.defaults.headers.common["Authorization"] = `Basic ${encoded}`;
        useAxiosForm.defaults.headers.common["token"] = `Bearer ${token}`;
    } else {
        delete useAxios.defaults.headers.common["Authorization"];
        delete useAxiosForm.defaults.headers.common["token"];
    }
}
// export async function setToken() {
//     const token = await getValidToken()
//     if (token) {
//         useAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         useAxiosForm.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     } else {
//         delete useAxios.defaults.headers.common["Authorization"];
//         delete useAxiosForm.defaults.headers.common["Authorization"];
//     }
// }

// Validates token, and removes it if it's invalid
setToken(getValidToken());

export default useAxios;
