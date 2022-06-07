import axios from 'axios';
const BASE_URL = 'https://apintd-elearning.herokuapp.com';
export default axios.create({
  baseURL: BASE_URL,
});
export const axiosAuth = axios.create({
  baseURL: `${BASE_URL}/auth`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosCourse = axios.create({
  baseURL: `${BASE_URL}/course`,
  headers: {
    'Content-Type': 'application/json',
  },
});
