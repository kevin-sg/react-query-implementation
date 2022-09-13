import { useQuery } from "react-query";

import type { IPostModel } from "@/models";
import { getPostById } from "@/services";

function useQueryPost(postId: number) {
  return useQuery<IPostModel, Error>(["Post", postId], ({ signal }) => getPostById(postId, signal));
}

export default useQueryPost;
