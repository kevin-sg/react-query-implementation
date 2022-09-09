import axios from "axios";

import type { IPostModel } from "../models";

const API = import.meta.env.VITE_APP_LOCAL_SERVER || "http://localhost:3005";

export const getPostById = async (postId: number): Promise<IPostModel> => {
  const { data } = await axios.get(`${API}/posts/${postId}`);
  return data;
};

export const getPosts = async (): Promise<IPostModel[]> => {
  const { data } = await axios.get(`${API}/posts`);
  return data;
};

export const createNewPost = async (post: IPostModel): Promise<IPostModel> => {
  const { data } = await axios.post(`${API}/posts`, post);
  return data;
};
