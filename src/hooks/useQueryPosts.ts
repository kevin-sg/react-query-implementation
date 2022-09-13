import { useQuery, useQueryClient } from "react-query";

import type { IPostModel } from "@/models";
import { getPosts } from "@/services";

const key = "Posts";

const useQueryPosts = () => {
  const queryClient = useQueryClient();

  const selectedPostById = (postId: number) => {
    return !!queryClient.getQueryData(["Post", postId]);
  };

  // options
  // retry: 1, // retry 1 time
  // retryDelay: 300 * 10, // 3 seconds
  // enabled: false, // disable query

  const query = useQuery<IPostModel[], Error>([key], ({ signal }) => getPosts(signal));

  return { selectedPostById, ...query };
};

export default useQueryPosts;
