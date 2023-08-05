import axios from "axios";

const API = axios.create({baseURL:'http://localhost:5000'})

export const singIn = (formData) => API.post("/users/singin", formData);
export const singUp = (formData) => API.post('/users/singup',formData);