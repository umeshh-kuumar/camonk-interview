import { Card, CardContent } from "@/components/ui/card";
import type { Blog } from "@/types/blog";

export default function BlogCard({
  blog,
  onClick,
}: {
  blog: Blog;
  onClick: (id: number) => void;
}) {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg"
      onClick={() => onClick(blog.id)}
    >
      <CardContent className="p-4">
        <p className="text-xs text-gray-500">{blog.category.join(", ")}</p>
        <h3 className="text-lg font-semibold">{blog.title}</h3>
        <p className="text-sm text-gray-600">{blog.description}</p>
      </CardContent>
    </Card>
  );
}
