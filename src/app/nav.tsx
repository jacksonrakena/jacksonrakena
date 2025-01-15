"use client";

import Link from "next/link";
import { Box, HStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const routes = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Blog",
      to: "/blog",
    } /*,
    {
      name: "Blog",
      to: "https://blog.jacksonrakena.com/",
    },*/,
  ];
  const pathname = usePathname();
  return (
    <div className="flex flex-row space-x-8">
      {routes.map((route) => (
        <a
          key={route.name}
          href={route.to}
          className={`hover:font-semibold ${
            pathname === route.to ? "font-extrabold" : ""
          }`}
          {...(route.to.startsWith("http")
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          {route.name.toLowerCase()}
        </a>
      ))}
    </div>
  );
};
