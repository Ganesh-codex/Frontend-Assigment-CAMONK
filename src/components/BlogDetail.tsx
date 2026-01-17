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

  const readTime = Math.max(1, Math.ceil(data.content.split(" ").length / 200));

  return (
    <article className="bg-white rounded-xl shadow p-6 space-y-6">

      
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-64 object-cover rounded-lg"
      />

     
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex gap-2">
          {data.category.map((cat) => (
            <span
              key={cat}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>

        <span>{readTime} min read</span>
      </div>

     
      <h1 className="text-2xl font-bold">{data.title}</h1>

     
      <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
        Share Article
      </button>

      
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {data.content}
      </p>

    </article>
  );
}
