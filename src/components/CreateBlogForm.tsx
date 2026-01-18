import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../api/blogAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "./Header";
import Footer from "./Footer";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    mutation.mutate({
      title: formData.get("title")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      content: formData.get("content")?.toString() || "",
      category: ["TECH"],
      coverImage: "https://picsum.photos/600/400",
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-2xl font-bold">Create New Blog</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="title" placeholder="Title" required />
            <Input name="description" placeholder="Description" required />
            <Textarea name="content" placeholder="Content" required rows={10} />

            {mutation.isError && (
              <p className="text-sm text-red-500">
                Failed to create blog. Please try again.
              </p>
            )}

            {mutation.isSuccess && (
              <p className="text-sm text-green-500">
                Blog created successfully!
              </p>
            )}

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" disabled={mutation.isPending} className="flex-1">
                {mutation.isPending ? "Creating..." : "Create Blog"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
