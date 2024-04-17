import { blogClient } from "@/apis/blog.client";
import { QueryParams } from "@/interfaces";
import { formatQueryParams } from "@/utils/formaters";
import { useQuery } from "react-query";
import { GetPostsResponse } from "./response.interface";

const getAllPosts = async (params: QueryParams) => {
  const queryParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value)
  );

  const { data: pets } = await blogClient<GetPostsResponse>("", {
    params: queryParams,
  });
  return pets;
};

export const useGetAllPotsQuery = (objectParams: QueryParams) => {
  const queryParamsString = formatQueryParams(objectParams);
  const allPetsQuery = useQuery(
    ["pets", queryParamsString],
    () => getAllPosts({ ...objectParams }),
    {
      staleTime: 1000 * 60, // 1 min
      refetchOnWindowFocus: false,
    }
  );

  return allPetsQuery;
};
