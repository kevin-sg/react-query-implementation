import { useState, useEffect, FC, Dispatch, SetStateAction } from "react";
import { Alert, ListGroup, Spinner } from "flowbite-react";

import { IPostModel } from "@/models";
import { getPosts } from "@/services";

interface IPostsProps {
  setPostId: Dispatch<SetStateAction<number>>;
}

const Posts: FC<IPostsProps> = ({ setPostId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ message: "" });
  const [posts, setPosts] = useState([] as IPostModel[]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getPosts();
        console.log(data);
        setPosts(data);
        setError({ message: "" });
      } catch (error: any) {
        setError((prev) => ({ ...prev, message: error.message }));
        setPosts([]);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner aria-label="Loading post..." />;
  }

  if (error.message) {
    return <Alert color="failure">Error fetching posts: {error.message}</Alert>;
  }

  return (
    <section>
      <h2 className="text-xl text-left font-semibold my-2">Posts:</h2>

      <div className="max-w-sm">
        <ListGroup>
          {posts.map((post) => (
            <ListGroup.Item>
              <button type="button" className="text-left" onClick={() => setPostId(post.id)}>
                - {post.title}
              </button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </section>
  );
};

export default Posts;
