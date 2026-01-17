import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";
import { Blog } from "../types/blog";

interface Props {
  blogId: number | null;
}

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading, isError } = useQuery<Blog>({
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

      {/* COVER IMAGE */}
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      {/* CATEGORY + READ TIME (TOP LINE) */}
      <div className="text-xs text-gray-500 flex items-center gap-2 uppercase tracking-wide">
        <span>{data.category.join(" & ")}</span>
        <span>·</span>
        <span>{readTime} min read</span>
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold leading-tight">
        {data.title}
      </h1>

      {/* SHARE BUTTON */}
      <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 w-fit">
        Share Article
      </button>

      {/* INFO BOX (CATEGORY | READ TIME | DATE) */}
      <div className="grid grid-cols-3 overflow-hidden rounded-lg border text-center text-sm">

        <div className="border-r px-4 py-3">
          <p className="text-xs text-gray-500 uppercase">Category</p>
          <p className="font-semibold">{data.category.join(" & ")}</p>
        </div>

        <div className="border-r px-4 py-3">
          <p className="text-xs text-gray-500 uppercase">Read Time</p>
          <p className="font-semibold">{readTime} Mins</p>
        </div>

        <div className="px-4 py-3">
          <p className="text-xs text-gray-500 uppercase">Date</p>
          <p className="font-semibold">
            {new Date(data.date).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>

      </div>

      {/* CONTENT */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {data.content}
      </p>

    </article>
  );
}
