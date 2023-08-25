import AsyncStorage from "@react-native-async-storage/async-storage";
import { accessToken } from "../config/pageData";


export async function getValidToken() {
    try {
        const token = await AsyncStorage.getItem(`${accessToken}`)
        if (token === null) {
            return null
        }
        return token;
    } catch (error) {
        return null;
    }
}

