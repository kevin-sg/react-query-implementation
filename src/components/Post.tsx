import { useState, useEffect, FC } from "react";
import { Alert, Spinner } from "flowbite-react";

import { IPostModel } from "@/models";
import { getPostById } from "@/services";

interface IPostProps {
  postId: number;
}

const Post: FC<IPostProps> = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ message: "" });
  const [post, setPost] = useState({} as IPostModel);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getPostById(postId);
        setPost((prev) => ({ ...prev, ...data }));
        setError({ message: "" });
      } catch (error: any) {
        setError((prev) => ({ ...prev, message: error.message }));
        setPost((prev) => ({ ...prev }));
      }
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Spinner aria-label="Loading post..." />;
  }

  if (error.message) {
    return <Alert color="failure">Error fetching posts: {error.message}</Alert>;
  }

  return (
    <article className="flex flex-col my-4 p-2 gap-2 border border-gray-500 rounded-lg">
      <h2 className="text-md font-semibold capitalize">- {post.title}</h2>
      <p className="text-left font-semibold capitalize">{post.body}</p>
    </article>
  );
};

export default Post;
