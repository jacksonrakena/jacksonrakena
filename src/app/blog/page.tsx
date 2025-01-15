import { loadAllPosts } from "./manager";

export const revalidate = 3600;

export default async function Blog() {
  const postFronts = (await loadAllPosts()).toSorted((b, a) => a.date - b.date);
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
