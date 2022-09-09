import { FC, useState } from "react";

import { Post, Posts, NewPost } from "@/components";
import { Button } from "flowbite-react";

const App: FC = () => {
  const [postId, setPostId] = useState(-1);

  return (
    <main className="container mx-auto py-4">
      <h1 className="text-center text-2xl font-bold mb-4">React-Query Demo</h1>

      <div className="flex flex-col gay-4 py-4">
        {postId > -1 ? (
          <Post postId={postId} />
        ) : (
          <div className="flex flex-col gap-2 py-4">
            {/* <NewPost /> */}
            <Posts setPostId={setPostId} />
          </div>
        )}

        {postId > -1 && <Button onClick={() => setPostId(-1)}>{"<"} Back to Post</Button>}
      </div>
    </main>
  );
};

export default App;
