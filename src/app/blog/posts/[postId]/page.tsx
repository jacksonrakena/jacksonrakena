import { loadAllPostIds, loadPost } from "../../manager";

export const revalidate = 3600;

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await loadAllPostIds()).map((f) => ({ postId: f }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await loadPost(postId);
  return (
    <>
      <div className="text-4xl">{post.frontmatter.title}</div>
      <div className="text-xl">tags: {post.frontmatter.tags.join(", ")}</div>
      <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        <post.component />
      </div>
    </>
  );
}
