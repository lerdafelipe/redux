import axios from "axios";

const baseUrl = process.env.POKEAPI || 'https://pokeapi.co/api/v2/';

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

export default axiosInstance;