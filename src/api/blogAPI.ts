import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export interface Blog {
  id: number;
  title: string;
  category: string[];
  description: string;
  content: string;
  coverImage: string;
  date: string;
}

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await api.get("/blogs");
  return res.data;
};

export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await api.get(`/blogs/${id}`);
  return res.data;
};

export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await api.post("/blogs", blog);
  return res.data;
};
