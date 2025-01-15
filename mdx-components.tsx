import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <div className="text-3xl">{children}</div>,
    h2: ({ children }) => <div className="text-2xl">{children}</div>,
    h3: ({ children }) => <div className="text-xl">{children}</div>,
    p: ({ children }) => <p className="">{children}</p>,
  };
}
