import createMDX from "@next/mdx";

export default createMDX({
  options: {
    jsx: true,
    remarkPlugins: [
      // @ts-expect-error next.js sucks
      ["remark-frontmatter"],
      // @ts-expect-error next.js sucks
      ["remark-mdx-frontmatter"],
      // @ts-expect-error next.js sucks
      ["remark-gfm"],
    ],
  },
})({
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "app.gradekeeper.xyz",
      "d.lu.je",
      "avatars.githubusercontent.com",
    ],
  },
});
