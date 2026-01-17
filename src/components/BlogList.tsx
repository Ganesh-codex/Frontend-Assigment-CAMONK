import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../api/blogs";
import BlogCard from "./BlogCard";
import { Blog } from "../types/blog";

interface Props {
  onSelect: (id: number) => void;
}

export default function BlogList({ onSelect }: Props) {
  const { data, isLoading, isError } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p>Loading blogs...</p>;
  if (isError) return <p>Error loading blogs</p>;

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelect(blog.id)}
        />
      ))}
    </div>
  );
}
