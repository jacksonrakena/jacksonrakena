import { Box, Link as CLink, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AboutMe } from "../components/AboutMe";
import { ShowcasedProjects } from "../components/ShowcasedProjects";

export const ColorNextLink = (props: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Box
      _hover={{ color: "primary.700" }}
      style={{ textDecoration: "underline" }}
      color={"primary.500"}
    >
      <Link href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </Link>
    </Box>
  );
};

export const ColorLink = (props: {
  href: string;
  children: React.ReactNode;
  linkProps?: any;
}) => {
  return (
    <CLink
      href={props.href}
      _hover={{ color: "primary.700", textDecor: "underline" }}
      target="_blank"
      rel="noreferrer"
      {...props.linkProps}
    >
      {props.children}
    </CLink>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jackson Rakena</title>
      </Head>
      <AboutMe />
      <ShowcasedProjects />
      <Divider />
      <Box mt={6} mb={6}>
        <ColorLink
          linkProps={{ textDecor: "none" }}
          href="https://blog.jacksonrakena.com/"
        >
          Blog
        </ColorLink>{" "}
        &bull;{" "}
        <ColorLink
          linkProps={{ textDecor: "none" }}
          href="https://status.rakena.co.nz/"
        >
          Service status
        </ColorLink>{" "}
        &bull;{" "}
        <ColorLink
          linkProps={{ textDecor: "none" }}
          href="https://redirects.jacksonrakena.com/discord"
        >
          My Discord server
        </ColorLink>
      </Box>
    </div>
  );
};

export default Home;
