import type { FC } from "react";

import { PostPage, InfinityPage } from "./pages";

const App: FC = () => {
  return (
    <main className="container  mx-auto py-4">
      <h1 className="text-center text-2xl font-bold mb-4 u">React-Query Demo</h1>

      {/* <PostPage /> */}
      <InfinityPage />
    </main>
  );
};

export default App;
