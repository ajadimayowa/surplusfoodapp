import { accessToken } from "../config/pageData";
import { setToken, useAxios } from "./init";
import { getValidToken } from "./token";
import AsyncStorage from "@react-native-async-storage/async-storage";



setToken(getValidToken())

export const signInUser = async (formData) => {
    try {
        const response = await useAxios.post(`/user/signin`, formData);
        const { data, status } = response;
        console.log('status', status)
        if (status === 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            await AsyncStorage.setItem(`${accessToken}`, data.token)
            return { data: data.payload, status, success: data.success, message: data?.message, token: data.token };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const onBoardUser = async (formData) => {
    try {
        const response = await useAxios.post(`/user/onboard`, formData);
        const { data, status } = response;
        console.log('status', status)
        if (status === 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status: status, success: data.success, message: data?.message };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};