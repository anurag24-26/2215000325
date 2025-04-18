import axios from "axios";

const BASE_URL = "http://20.244.56.144/evaluation-service";

// ✅ Replace with your latest valid token (check expiry if needed)
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU3MDI3LCJpYXQiOjE3NDQ5NTY3MjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE1NDdjNWQ4LTM1ZjYtNDc1Ny04YjMzLWM4ZWEyZDZjYWYyYiIsInN1YiI6ImFudXJhZy50cmlwYXRoaV9jcy5haW1sMjJAZ2xhLmFjLmluIn0sImVtYWlsIjoiYW51cmFnLnRyaXBhdGhpX2NzLmFpbWwyMkBnbGEuYWMuaW4iLCJuYW1lIjoiYW51cmFnIHRyaXBhdGhpIiwicm9sbE5vIjoiMjIxNTAwMDMyNSIsImFjY2Vzc0NvZGUiOiJDTm5lR1QiLCJjbGllbnRJRCI6ImE1NDdjNWQ4LTM1ZjYtNDc1Ny04YjMzLWM4ZWEyZDZjYWYyYiIsImNsaWVudFNlY3JldCI6Ill6ZXVibmVKRWNiaGRScnkifQ.WGS_IsDNiXqu_lAlEk9fUqXADVbTNn4TP9RXndqion4"; // ⬅️ Your full token here

const AUTH_HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

// 🧑‍💻 Get all users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, AUTH_HEADERS);
    return response.data.users || [];
  } catch (error) {
    handleError(error);
    return [];
  }
};

// 📝 Get all posts from a specific user
export const getUserPosts = async (userId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/users/${userId}/posts`,
      AUTH_HEADERS
    );
    return response.data.posts || [];
  } catch (error) {
    handleError(error);
    return [];
  }
};

// 💬 Get all comments from a specific post
export const getPostComments = async (postId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/posts/${postId}/comments`,
      AUTH_HEADERS
    );
    return response.data.comments || [];
  } catch (error) {
    handleError(error);
    return [];
  }
};

// 🛑 Reusable error logger
const handleError = (error) => {
  console.error("API Error:", error.message);
  if (error.response) {
    console.log("❌ Status:", error.response.status);
    console.log("❗ Response Data:", error.response.data);
  } else if (error.request) {
    console.log("⚠️ No response from server");
  } else {
    console.log("💥 Axios Error:", error.message);
  }
};
