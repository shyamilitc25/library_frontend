import { ILogin } from './../interface';

const API_UL = import.meta.env.VITE_API_URL;
import axios from "axios";
export const loginService=async(userData:ILogin)=>{
    const user=await axios.post(`${API_UL}/users/login`,userData)
    return user;
}