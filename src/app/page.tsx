"use client";
import { Box, Divider } from "@chakra-ui/react";
import { AboutMe, SocialLink } from "./components/AboutMe";
import { ShowcasedProjects } from "./components/ShowcasedProjects";

export default function HomePage() {
  return (
    <div>
      <AboutMe />
      <ShowcasedProjects />
      <Divider />
      <Box mt={6} mb={12}>
        <SocialLink href="https://status.rakena.co.nz/">
          Service status
        </SocialLink>{" "}
        &bull;{" "}
        <SocialLink href="https://jackson.url.lol/discord">
          My Discord server
        </SocialLink>
      </Box>
    </div>
  );
}
