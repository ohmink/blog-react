import axios from "axios";

export const getAll = async () => {
  try {
    const answer = await axios.get(`http://localhost:3001/posts/getAll`);
    return answer.data;
  } catch (error) {
    return error;
  }
};

const getTagList = () => {};

const getDetail = () => {};

export const create = async (posts) => {
  console.log(posts);
  try {
    const response = await axios.post(
      "http://localhost:3001/posts/create",
      posts
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const remove = () => {};

const update = () => {};
