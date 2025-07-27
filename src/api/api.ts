import axios from "axios";
import { API_BASE_URL } from "assets/constants/constants";

export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

