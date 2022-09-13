import axios from "axios";

import type { IMortyResponse, IPostModel } from "@/models";

const API = import.meta.env.VITE_APP_LOCAL_SERVER || "http://localhost:3005";

export const getPostById = async (postId: string | number, signal: AbortSignal | undefined): Promise<IPostModel> => {
  const { data } = await axios.get(`${API}/posts/${postId}`, { signal });
  return data;
};

export const getPosts = async (signal: AbortSignal | undefined): Promise<IPostModel[]> => {
  const { data } = await axios.get(`${API}/posts`, { signal });
  return data;
};

export const createNewPost = async (post: IPostModel): Promise<IPostModel> => {
  const { data } = await axios.post(`${API}/posts`, post);
  return data;
};

export const getMorty = async (pageParam: string, signal: AbortSignal | undefined): Promise<IMortyResponse> => {
  const { data } = await axios.get(pageParam, { signal });
  return data;
};
