import axios from "axios";

const BASE_URL = "http://10.0.2.2:5000";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const saveProgress = async (data) => {
  try {
    const res = await api.post("/progress", data);
    return res.data;
  } catch (err) {
    console.log("SAVE API ERROR:", err.message);
    throw err;
  }
};

export const getProgress = async () => {
  try {
    const res = await api.get("/progress");
    return res.data;
  } catch (err) {
    console.log("GET API ERROR:", err.message);
    throw err;
  }
};
