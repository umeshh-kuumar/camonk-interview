import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogAPI";

export default function BlogDetail({ blogId }: { blogId: number }) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId),
    enabled: !!blogId,
  });

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Select a blog</p>;

  return (
    <div className="space-y-4">
      <img
        src={data.coverImage}
        alt={data.title}
        className="rounded-lg"
      />
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}
