import { useInfiniteQuery } from "react-query";

import { getMorty } from "@/services";

const API = "https://rickandmortyapi.com/api/character";

const useQueryMorty = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["Morty"],
    ({ pageParam = API, signal }) => {
      return getMorty(pageParam, signal);
    },
    {
      getNextPageParam: (lastPage) => lastPage.info.next,
    },
  );

  const results = data?.pages.flatMap((page) => page.results) ?? [];

  return { results, hasNextPage, fetchNextPage };
};

export default useQueryMorty;
