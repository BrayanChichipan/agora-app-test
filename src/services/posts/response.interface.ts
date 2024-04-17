import { Post } from "@/interfaces/posts.interface";

export interface GetPostsResponse {
  data: Post[];
  count: number;
}
