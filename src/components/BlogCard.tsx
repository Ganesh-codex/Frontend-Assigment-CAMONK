import { Blog } from "../types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { timeAgo } from "@/lib/timeAgo";

interface Props {
  blog: Blog;
  onClick: () => void;
}

export default function BlogCard({ blog, onClick }: Props) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer transition hover:shadow-md"
    >
      <CardContent className="p-4 space-y-2">

        {/* HEADER ROW */}
        <div className="flex items-start justify-between">
          {/* CATEGORY (LEFT) */}
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {blog.category.join(", ")}
          </p>

          {/* ✅ TIME (TOP-RIGHT CORNER) */}
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {timeAgo(blog.date)}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="font-semibold leading-tight">
          {blog.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
}
