import axios from 'axios';

let apiUri = process.env.API_URI;

const login = async (credentials) => {
  const finalUrl = apiUri + '/auth/login';

  return axios.post(finalUrl, credentials).then((res) => {
    if (res.data) {
      localStorage.setItem('token', res.data);
    }

    return res.data;
  });
};

const register = async (credentials) => {
  const finalUrl = apiUri + '/auth/register';

  return axios.post(finalUrl, credentials);
};

const logout = () => {
  localStorage.removeItem('token');
};

const authServices = {
  login,
  register,
  logout,
};

export default authServices;
