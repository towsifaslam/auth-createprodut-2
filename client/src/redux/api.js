import axios from "axios";

const API = axios.create({baseURL:'http://localhost:5000'})


export const singIn = (formData) => API.post("/users/singin", formData);
export const singUp = (formData) => API.post('/users/singup',formData);


// tour
export const createTour = (tourData)=> API.post('/tour',tourData)
export const getTours = ()=> API.get('/tour')
export const getTour =(id)=> API.get(`/tour/${id}`)

export const getToursByuser = (userId)=> API.get(`/tour/userTours/${userId}`)