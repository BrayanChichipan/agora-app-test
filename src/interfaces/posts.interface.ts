import { PostType } from "@/types";

export interface Post {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  isPublished: boolean;
  type: PostType;
  images?: string[];
}
