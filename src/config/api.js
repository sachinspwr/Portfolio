const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

export const API = {
  sendMessage: `${BACKEND_URL}/api/sendMessage`,
  hireMe: `${BACKEND_URL}/api/hireme`,
};
