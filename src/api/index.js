import axios from "axios";
const url = "http://localhost:1337/api/student-informations"; //change to strapi api
export const readStudent = () => axios.get(url);
export const createStudent = newStudent => axios.post(url,newStudent);
export const updateStudent = (id, updatedStudent) => axios.put(`${url}//${id}`, updatedStudent)
export const deleteStudent = (id) => axios.delete(`${url}//${id}`)
