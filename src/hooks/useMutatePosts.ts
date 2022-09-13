import { useMutation, useQueryClient } from "react-query";

import type { IPostModel } from "@/models";
import { createNewPost } from "@/services";

const useMutatePosts = () => {
  const queryClient = useQueryClient();

  return useMutation(createNewPost, {
    onSuccess: (post) => {
      queryClient.setQueryData<IPostModel[] | undefined>(["Posts"], (oldData) => {
        if (typeof oldData !== "undefined") return [...oldData, post];
      });
      queryClient.invalidateQueries(["Posts"]);
    },
  });
};

export default useMutatePosts;
