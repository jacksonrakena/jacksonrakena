"use client";
import { Box, Divider } from "@chakra-ui/react";
import { AboutMe } from "../components/AboutMe";
import { BoldLink } from "../components/BoldLink";
import { ShowcasedProjects } from "../components/ShowcasedProjects";

export default function HomePage() {
  return (
    <div>
      <AboutMe />
      <ShowcasedProjects />
      <Divider />
      <Box mt={6} mb={12}>
        <BoldLink href="https://status.rakena.co.nz/">Service status</BoldLink>{" "}
        &bull;{" "}
        <BoldLink href="https://jackson.url.lol/discord">
          My Discord server
        </BoldLink>
      </Box>
    </div>
  );
}
