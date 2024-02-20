"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, HStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const routes = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Work",
      to: "/work",
    },
    {
      name: "Blog",
      to: "https://blog.jacksonrakena.com/",
    },
  ];
  const pathname = usePathname();
  return (
    <Box my={12}>
      <HStack spacing={6}>
        {routes.map((route) => (
          <Link
            href={route.to}
            {...(route.to.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
            _hover={{
              fontWeight: "extrabold",
            }}
            fontWeight={pathname === route.to ? "extrabold" : ""}
          >
            {route.name.toLowerCase()}
          </Link>
        ))}
      </HStack>
    </Box>
  );
};
