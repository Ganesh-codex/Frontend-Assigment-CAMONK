import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";
import { Blog } from "../types/blog";

interface Props {
  blogId: number | null;
}

export default function BlogDetail({ blogId }: Props) {
  const {
    data,
    isLoading,
    isError,
  } = useQuery<Blog>({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId as number),
    enabled: !!blogId,
  });

  if (!blogId) {
    return <p className="text-gray-500">Select a blog to read</p>;
  }

  if (isLoading) {
    return <p>Loading blog...</p>;
  }

  if (isError || !data) {
    return <p>Failed to load blog</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <div className="flex gap-2 mb-2">
        {data.category.map((cat) => (
          <span
            key={cat}
            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
          >
            {cat}
          </span>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>

      <p className="text-gray-700 leading-relaxed">
        {data.content}
      </p>
    </div>
  );
}
