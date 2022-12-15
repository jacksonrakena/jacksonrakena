import { Box, Container, Divider, Link as CLink } from "@chakra-ui/react";
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
      textDecor={"underline"}
      color="primary.500"
      _hover={{ color: "primary.700" }}
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
      <Container>
        <AboutMe />
        <ShowcasedProjects />
        <Divider />
        <Box mt={6} mb={6}>
          <ColorLink
            linkProps={{ textDecor: "none" }}
            href="https://blog.jacksonrakena.com/"
          >
            My blog
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
          </ColorLink>{" "}
          &bull;{" "}
          <ColorLink linkProps={{ textDecor: "none" }} href="/footprint">
            Footprint
          </ColorLink>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
