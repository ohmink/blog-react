import axios from "axios";

export const isLogin = () => {
  if (axios.defaults.headers.common["Authorization"]) return true;
  return false;
};

export const login = async (data) => {
  const response = await axios.post("http://localhost:3001/user/login", data, {
    withCreadentials: true,
  });

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${response.data.access_token}`;

  return response.status;
};

export const getAll = async () => {
  try {
    const answer = await axios.get(`http://localhost:3001/posts/getAll`);
    return answer.data;
  } catch (error) {
    return error;
  }
};

export const getDetail = async (postsId) => {
  try {
    const answer = await axios.get(
      `http://localhost:3001/posts/getDetail/${postsId}`
    );
    return answer.data;
  } catch (error) {
    return error;
  }
};

export const create = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/posts/create",
      data
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const remove = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3001/posts/delete/${id}`
    );

    return response.status;
  } catch (error) {
    return error;
  }
};

export const update = async (id, data) => {
  try {
    const response = await axios.patch(
      `http://localhost:3001/posts/patch/${id}`,
      data
    );

    return response.status;
  } catch (error) {
    return error;
  }
};
