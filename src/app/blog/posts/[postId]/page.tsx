import { Metadata } from "next";
import { loadAllPostIds, loadPost } from "../../manager";

export const revalidate = 3600;

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await loadAllPostIds()).map((f) => ({ postId: f }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}): Promise<Metadata> {
  const { postId } = await params;
  const post = await loadPost(postId);

  return {
    title: post.frontmatter.title,
    description: "Jackson's blog",
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await loadPost(postId);
  return (
    <div className="mb-6">
      <div className="text-4xl mb-2">{post.frontmatter.title}</div>
      <div className="flex gap-3">
        {post.frontmatter.tags.map((tag) => (
          <div
            className="bg-gray-100 rounded-lg p-1 px-1.5 text-xs text-gray-500 font-semibold"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        <post.component />
      </div>
      <div>
        Yours
        <br /> Jackson
      </div>
    </div>
  );
}
