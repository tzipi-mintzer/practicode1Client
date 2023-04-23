import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
console.log(process.env.REACT_APP_API_URL);
export default {
  getTasks: async() => {
    console.log("get", axios.defaults.baseURL)
    const result = await axios.get(`/items`)
    return result.data;
  },
  addTask: async (name) => {
    console.log('addTask')
    const result = await axios.post(`/items`, { name, IsComplete: false })
  },
  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete });
    const result = await axios.put(`/items`, { id, isComplete });
  },
  deleteTask: async (id) => {
    console.log('deleteTask')
    await axios.delete(`/items/${id}`);
  }
};
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("mistake", error);
    return Promise.reject(error);
  }
);