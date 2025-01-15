import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <div className="text-3xl my-4">{children}</div>,
    h2: ({ children }) => <div className="text-2xl my-6">{children}</div>,
    h3: ({ children }) => <div className="text-xl my-4">{children}</div>,
    p: ({ children }) => <div className="my-4">{children}</div>,

    ul: ({ children }) => <ul className="list-disc">{children}</ul>,
    li: ({ children }) => (
      <li style={{ marginTop: "4px", marginBottom: "4px" }}>{children}</li>
    ),
  };
}
