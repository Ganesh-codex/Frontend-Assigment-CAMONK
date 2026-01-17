import axios from "axios";
import { Blog } from "../types/blog";

const API_URL = "http://localhost:3001";

export const getBlogs = async (): Promise<Blog[]> => {
  const { data } = await axios.get(`${API_URL}/blogs`);
  return data;
};

export const getBlogById = async (id: number): Promise<Blog> => {
  const { data } = await axios.get(`${API_URL}/blogs/${id}`);
  return data;
};

export const createBlog = async (
  blog: Omit<Blog, "id">
): Promise<Blog> => {
  const { data } = await axios.post(`${API_URL}/blogs`, blog);
  return data;
};
