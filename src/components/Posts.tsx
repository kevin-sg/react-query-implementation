import { Alert, ListGroup, Spinner } from "flowbite-react";
import type { FC, Dispatch, SetStateAction } from "react";

import { useQueryPosts } from "@/hooks";

interface IPostsProps {
  setPostId: Dispatch<SetStateAction<number>>;
}

const Posts: FC<IPostsProps> = ({ setPostId }) => {
  const {
    data: posts,
    status,
    error,
    isFetching,
    selectedPostById,
    // isIdle, // initial state
    // refetch, // refetch data
  } = useQueryPosts();

  if (status === "loading") {
    return <Spinner aria-label="Loading post..." />;
  }

  if (status === "error") {
    return <Alert color="failure">Error fetching posts: {error?.message}</Alert>;
  }

  return (
    <section>
      <h2 className="text-xl text-left font-semibold my-2">Posts: {isFetching && <Spinner title="" />}</h2>

      <div className="max-w-sm">
        <ListGroup>
          {posts?.map((post) => (
            <ListGroup.Item key={post.id} active={selectedPostById(post.id)} onClick={() => setPostId(post.id)}>
              {JSON.stringify(post.id)}- {post.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </section>
  );
};

export default Posts;
