import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/api/blogAPI";
import BlogCard from "./BlogCard";
import type { Blog } from "@/types/blog";

type BlogListProps = {
  onSelect: (id: number) => void;
};

export default function BlogList({ onSelect }: BlogListProps) {
  const { data, isLoading, error } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p>Loading blogs...</p>;
  if (error) return <p>Error fetching blogs</p>;

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
