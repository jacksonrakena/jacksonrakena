import { readdir } from "fs/promises";
import path from "path";

export type PostFrontmatter = {
  title: string;
  layout: "post";
  tags: string[];
  image?: string;
  published: boolean;
  date: Date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function processFrontmatter(frontmatter: any): PostFrontmatter {
  return {
    ...(frontmatter as PostFrontmatter),
    date: new Date(frontmatter.date ?? Date.now()),
    tags: (frontmatter.tags ?? "").split(" "),
    published: !!frontmatter.published,
  };
}

export async function loadAllPostIds() {
  const posts = await readdir(path.join("posts"));
  return posts.map((f) => f.replace(/(.mdx)|(.md)/, ""));
}

export async function loadAllPosts() {
  return await Promise.all(
    (
      await loadAllPostIds()
    ).map((postId) =>
      import(`@/../posts/${postId}.mdx`).then((post) => ({
        ...processFrontmatter(post.frontmatter),
        id: postId,
      }))
    )
  );
}

export async function loadPost(postId: string) {
  const { default: PostComponent, frontmatter } = await import(
    `@/../posts/${postId}.mdx`
  );

  return {
    component: PostComponent as React.FC,
    frontmatter: processFrontmatter(frontmatter),
  };
}
