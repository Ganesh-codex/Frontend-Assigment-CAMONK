import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";

export default function Home() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <>
      {/* ✅ HERO SECTION (AS PER ASSIGNMENT) */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <h1 className="text-3xl font-bold">CA Monk Blog</h1>
          <p className="mt-2 text-gray-600">
            Stay updated with the latest trends in finance, accounting, and career growth
          </p>
        </div>
      </section>

      {/* ✅ MAIN CONTENT */}
      <div className="bg-gray-50 px-6 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">

          {/* LEFT PANEL */}
          <aside className="space-y-4 md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Latest Articles
            </h2>

            <BlogList onSelect={setSelectedBlogId} />
          </aside>

          {/* RIGHT PANEL */}
          <section className="md:col-span-2">
            <BlogDetail blogId={selectedBlogId} />
          </section>

        </div>
      </div>
    </>
  );
}

// import { useState } from "react";
// import BlogList from "../components/BlogList";
// import BlogDetail from "../components/BlogDetail";

// export default function Home() {
//   const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

//   return (
//     <div className="bg-gray-50 px-6 py-8">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">

//         {/* LEFT PANEL */}
//         <aside className="space-y-4 md:col-span-1">
//           <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
//             Latest Articles
//           </h2>

//           <BlogList onSelect={setSelectedBlogId} />
//         </aside>

//         {/* RIGHT PANEL */}
//         <section className="md:col-span-2">
//           <BlogDetail blogId={selectedBlogId} />
//         </section>

//       </div>
//     </div>
//   );
// }
