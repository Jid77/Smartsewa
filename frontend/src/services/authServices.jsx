import axios from "axios";

const API_URL = "https://localhost:5000";

const signup = async (username, email, password) => {
  return await axios.post(`${API_URL}/signup`, { username, email, password });
};

const signin = async (email, password) => {
  return await axios.post(`${API_URL}/signin`, { email, password });
};

const getHome = async (token) => {
  return await axios.get(`${API_URL}/home`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { signup, signin, getHome };
