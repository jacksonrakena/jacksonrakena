import { Metadata } from "next";
import { loadAllPosts } from "./manager";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Jackson's blog",
  description: "yap",
  twitter: {
    images: ["https://avatars.githubusercontent.com/u/44521335?v=4"],
  },
};

export default async function Blog() {
  const postFronts = (await loadAllPosts()).toSorted(
    (b, a) => (a.date as unknown as number) - (b.date as unknown as number)
  );
  return (
    <>
      <div className="font-semibold text-xl">blog posts:</div>
      <div className="flex flex-col gap-y-8 mt-8">
        {postFronts.map((post) => (
          <div key={post.title}>
            <a href={`/blog/posts/${post.id}`} className="hover:font-bold">
              <div>{post.title}</div>
              <div className="text-gray-500">
                published{" "}
                {post.date.toLocaleDateString([], { dateStyle: "medium" })}
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
