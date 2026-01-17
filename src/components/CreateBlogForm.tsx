import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";
import { Button } from "@/components/ui/button";
import { Blog } from "../types/blog";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (blog: Omit<Blog, "id">) => createBlog(blog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  const handleCreate = () => {
    mutation.mutate({
      title: "New Blog Title",
      category: ["FINANCE"],
      description: "Short blog description",
      content: "Full blog content goes here...",
      coverImage: "https://picsum.photos/800/400",
      date: new Date().toISOString(),
    });
  };

  return (
    <Button onClick={handleCreate} disabled={mutation.isLoading}>
      {mutation.isLoading ? "Creating..." : "Create Blog"}
    </Button>
  );
}
