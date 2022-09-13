import { Alert, Spinner } from "flowbite-react";
import type { FC } from "react";

import { useQueryPost } from "@/hooks";

const Post: FC<{ postId: number }> = ({ postId }) => {
  const { data: post, status, error } = useQueryPost(postId);

  if (status === "loading") {
    return <Spinner aria-label="Loading post..." />;
  }

  if (status === "error") {
    return <Alert color="failure">Error fetching posts: {error.message}</Alert>;
  }

  return (
    <article className="flex flex-col my-4 p-2 gap-2 border border-gray-500 rounded-lg">
      <h2 className="text-md font-semibold capitalize">- {post?.title}</h2>
      <p className="text-left font-semibold capitalize">{post?.body}</p>
    </article>
  );
};

export default Post;
