const TOKEN_NAME = "token";

// 將 token 存到 localStorage
const setAuthToken = (token: string) => {
  localStorage.setItem(TOKEN_NAME, token);
};

// 從 localStorage 讀取 token
const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

// 從 localStorage 移除 token
const removeLocalStorage = () => {
  return localStorage.removeItem(TOKEN_NAME);
};

export{ setAuthToken, getAuthToken, removeLocalStorage }