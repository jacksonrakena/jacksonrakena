"use client";

import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BoldLink } from "../../components/BoldLink";
interface Project {
  id: number;
  name: string;
  role?: string;
  tech?: string;
  link?: string;
  content?: JSX.Element;
}
const work: Project[] = [
  {
    id: 2,
    name: "Gradekeeper",
    link: "https://gradekeeper.xyz",
    role: "Personal project",
    tech: "Next.js / Rust",
    content: (
      <>
        <Stack spacing={12}>
          <Box>
            Serves over 500 students every day at 15+ universities and colleges
            across the world
            <br />
            <br />
            Gradekeeper is a free and easy-to-use website and Progressive Web
            App (PWA) that allows university students to track their course
            progress.
            <br />
            <br />
            It provides helpful information about average grades, grades needed
            to reach a certain goal, and projected grades, based on what
            they&apos;ve already achieved.
            <br />
            <br />
            Gradekeeper is a Next.js app, using React and Chakra UI on the
            frontend, with Prisma ORM connected to a PlanetScale MySQL database
            for storing user data. It uses Google for authentication and account
            management. I created Gradekeeper because I was annoyed at not being
            able to see my progress in a course – and what grade I would likely
            get based on my results so far.
            <br />
            <br />
            It has quickly blown past my expectations &mdash; with over 500
            registered accounts at 15+ universities around the world including
            all of New Zealand's major universities, several leading Australian
            institutions, and the University of California, San Francisco.
          </Box>
        </Stack>
      </>
    ),
  },
  {
    id: 0,
    name: "GoCloud Connect — Whānau Āwhina Plunket",
    role: "Lead frontend engineer",
    tech: "React / AWS",
    link: "https://www.plunket.org.nz/plunket/what-we-offer/plunketline/",
    content: (
      <>
        In 2022, I led the development of a React-based call center solution
        using Amazon Connect that was deployed nationally to Plunket’s at-home
        care service. This solution involved 4 repositories, 30,000 lines of
        code, and over 100 total AWS resources organized with CloudFormation and
        remains the proudest piece of work in my career.
        <br />
        <br />
        My team engineered a solution that never missed a beat &mdash; 24 hours
        a day, 7 days a week, 365 days a year &mdash; so Plunket nurses can
        never miss a call from a concerned mother caring for her child. As you
        read this, a nurse will be using our solution to pick-up a call,
        escalate, or schedule an appointment with a mother.
        <br />
        <br />
        Thousands of engineer hours went into scrutinizing every detail &mdash;
        flows, buttons, actions, text &mdash; to ensure it was super simple to
        use for customers, and we delivered a product that meets every need for
        Plunket.
        <br />
        <br />
        We also handled the transition from a legacy on-premise call center
        solution to our cloud-based solution built on top of Amazon Connect,
        including porting numbers, creating documentation training staff, and
        ensuring that the transition was as smooth as possible.
      </>
    ),
  },
  {
    id: 1,
    name: "Visitor App — Garage Project",
    role: "Lead engineer",
    tech: "React / DynamoDB",
    content: (
      <>
        The Visitor App was a React-based app connected to a DynamoDB database
        using AWS Lambda, that handled visitor induction and safety paperwork
        for hundreds of visitors entering Garage Project sites every day across
        Wellington.
        <br />
        <br />I engineered the application{"'"}s structure to support both
        Google and Microsoft (MSAL) systems, so that a staff member was alerted
        and sent the filled-in paperwork when a visitor completed the form.
        <br />
        <br /> I also pushed for the system design to be fully generic and
        turn-key, so that our company could, within a day, deploy this system to
        a new client with minimal configuration and zero code changes.
      </>
    ),
  },
  {
    id: 3,
    name: "StreamApps",
    role: "Engineering chief",
    link: undefined,
    tech: "Elixir / Phoenix",
    content: (
      <>
        <Stack spacing={8}>
          <Text>
            StreamTools is a subscription service that allows streamers and
            other content creators to have interactive and powerful on-stream
            tools for as little as $5/month.
            <br />
            <br />
            StreamTools primarily consists of a Phoenix web server, providing up
            generated pages on each request. It consists of a variety of
            utilities that perform different functions, but one of note is the{" "}
            <em>Engagement Counters</em>, which show the number of Twitter
            followers, Facebook likes, and other social media stats on a stream.
            <br />
            <br />I lead the technology & engineering side of StreamApps
            Limited, with two friends taking up the management and sales roles.
          </Text>
        </Stack>
      </>
    ),
  },
];

export default function Work() {
  return (
    <Box textAlign={"justify"}>
      <Stack spacing={8}>
        <Heading fontWeight={""}>my work</Heading>
        <Stack spacing={6}>
          <Box>
            This page is a small overview of the proudest work in my career. If
            you want to get in touch to learn more, email me at{" "}
            <BoldLink href="mailto:hi@jacksonrakena.com">
              hi@jacksonrakena.com
            </BoldLink>
            .
          </Box>
        </Stack>
        <hr />
      </Stack>
      <Box my={6}>
        {work.map((commercial, i) => (
          <Box key={i} my={8}>
            <Stack mb={6}>
              {commercial.link ? (
                <BoldLink isExternal href={commercial.link}>
                  <Heading size="md" fontWeight={""}>
                    {commercial.name}
                    <Icon ml={2} boxSize={3} as={FaExternalLinkAlt} />
                  </Heading>
                </BoldLink>
              ) : (
                <Heading size="md" fontWeight={""}>
                  {commercial.name}
                </Heading>
              )}
              <Flex justifyContent={"space-between"}>
                <Box>{commercial.role}</Box>
                <Box>{commercial.tech}</Box>
              </Flex>
            </Stack>

            <Box>{commercial.content}</Box>
            {i != work.length - 1 && (
              <Box mt={6}>
                <hr />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
