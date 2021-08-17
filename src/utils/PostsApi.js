import axios from "axios";

export const isLogin = () => {
  if (axios.defaults.headers.common["Authorization"]) return true;
  return false;
};

export const login = async (data) => {
  const response = await axios.post(
    "https://ohmink-blog-server.herokuapp.com/user/login",
    data,
    {
      withCreadentials: true,
    }
  );

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${response.data.access_token}`;

  return response.status;
};

export const getAll = async () => {
  try {
    const answer = await axios.get(
      `https://ohmink-blog-server.herokuapp.com/posts/getAll`
    );
    return answer.data;
  } catch (error) {
    return error;
  }
};

export const getDetail = async (postsId) => {
  try {
    const answer = await axios.get(
      `https://ohmink-blog-server.herokuapp.com/posts/getDetail/${postsId}`
    );
    return answer.data;
  } catch (error) {
    return error;
  }
};

export const create = async (data) => {
  try {
    const response = await axios.post(
      "https://ohmink-blog-server.herokuapp.com/posts/create",
      data
    );

    return response;
  } catch (error) {
    return error;
  }
};

const remove = async (id) => {
  try {
    const response = await axios.delete(
      `https://ohmink-blog-server.herokuapp.com/posts/delete/:${id}`
    );

    return response;
  } catch (error) {
    return error;
  }
};

const update = async (id) => {
  try {
    const response = await axios.patch(
      `https://ohmink-blog-server.herokuapp.com/posts/patch/:${id}`
    );

    return response;
  } catch (error) {
    return error;
  }
};
