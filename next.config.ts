import createMDX from "@next/mdx";

export default createMDX({
  options: {
    jsx: true,
    remarkPlugins: [
      ["remark-frontmatter"],
      ["remark-mdx-frontmatter"],
      ["remark-gfm"],
    ],
  },
})({
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["app.gradekeeper.xyz", "d.lu.je"],
  },
});
