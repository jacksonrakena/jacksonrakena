import { Link } from "@chakra-ui/react";
import React from "react";

export const BoldLink = (props: {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Link
      {...props}
      _hover={{ color: "primary.700", textDecor: "underline" }}
      {...(props.isExternal
        ? {
            target: "_blank",
            rel: "noreferrer",
          }
        : {})}
    >
      {props.children}
    </Link>
  );
};
