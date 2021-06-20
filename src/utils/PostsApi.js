import axios from "axios";

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
      "http://localhost:3001/posts/create",
      data
    );

    return response;
  } catch (error) {
    return error;
  }
};

const remove = () => {};

const update = () => {};
