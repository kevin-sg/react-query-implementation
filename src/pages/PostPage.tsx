import { Button } from "flowbite-react";
import { FC, useState } from "react";

import { NewPost, Post, Posts } from "@/components";

const PostPage: FC = () => {
  const [postId, setPostId] = useState<number>(-1);

  return (
    <div className="py-4">
      {postId > -1 ? (
        <Post postId={postId} />
      ) : (
        <div className="w-full mx-auto flex justify-center items-start gap-2 py-4">
          <NewPost />
          <Posts setPostId={setPostId} />
        </div>
      )}

      {postId > -1 && <Button onClick={() => setPostId(-1)}>{"<"} Back to Post</Button>}
    </div>
  );
};

export default PostPage;
