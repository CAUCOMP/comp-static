import axios from "axios";

const baseURL = "http://3.38.112.62:8080";

export const login = async (email, password) => {
  const { data } = await axios.post(`${baseURL}/api/auth/login`, {
    email,
    password,
  });

  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);

  return data;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
};

export const getNewRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    logout();
    return;
  }

  const { data } = await axios.post(`${baseURL}/api/auth/refresh`, {
    refreshToken,
  });

  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);

  return data;
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("accessToken");
};

export const register = async (email, password, name) => {
  const { data } = await axios.post(`${baseURL}/api/auth/signup`, {
    email,
    password,
    name,
  });
  return data;
};
