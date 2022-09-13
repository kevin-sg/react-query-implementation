import InfiniteScroll from "react-infinite-scroll-component";
import { Badge, Card, Spinner } from "flowbite-react";
import type { FC } from "react";

import { useQueryMorty } from "@/hooks";
import { FormatDate } from "@/utilities";

const InfinityPage: FC = () => {
  const { results, hasNextPage, fetchNextPage } = useQueryMorty();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">Infinite Query</h1>

      <InfiniteScroll
        dataLength={results?.length}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={
          <div className="relative flex gap-2 justify-center items-center overflow-hidden">
            <Spinner aria-label="Large spinner" size="lg" />
            <p className="text-lg font-semibold">Loading...</p>
          </div>
        }
      >
        <div className="w-full h-full my-4 grid grid-cols-3 xl:grid-cols-5 gap-4">
          {results?.map((item) => (
            <div key={item.id} className="w-60">
              <Card imgSrc={item.image}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                <div className="flex flex-wrap gap-2">
                  <Badge color="success">{item.gender}</Badge>
                  <Badge color="warning">{item.status}</Badge>
                  <Badge color="purple">{item.location.name}</Badge>
                  <Badge color="pink">{FormatDate(item.created)}</Badge>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </InfiniteScroll>

      {!hasNextPage && <p className="text-center text-xl font-semibold">No more data</p>}
    </div>
  );
};

export default InfinityPage;
