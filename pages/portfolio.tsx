import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  ListItem,
  Spacer,
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  UnorderedList,
  useColorMode,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { ColorNextLink } from "./index";

interface Project {
  id: number;
  name: string;
  description?: string;
  link: string | null | undefined;
  arch: string[];
  tags?: JSX.Element[];
  year?: string;
  content?: JSX.Element;
}
const work: Project[] = [
  {
    id: 0,
    name: "GoCloud Connect",
    description:
      "A custom Amazon Connect solution for New Zealand's largest maternity support provider.",
    link: "https://www.plunket.org.nz/plunket/what-we-offer/plunketline/",
    arch: ["React", "AWS", "MSAL"],
    tags: [
      <Tag key={0} size="sm" colorScheme={"orange"}>
        AWS
      </Tag>,
    ],
    content: (
      <>
        PlunketLine is a free, 24/7/365 helpline for new parents, providing
        medical information and assistance to those who need it most.
      </>
    ),
  },
  {
    id: 1,
    name: "Visitor App",
    description: "",
    arch: ["React", "DynamoDB"],
    link: null,
    tags: [
      <Tag key={0} size="sm" colorScheme={"orange"}>
        AWS
      </Tag>,
    ],
    content: <></>,
  },
];
const projects: Project[] = [
  {
    id: 2,
    name: "OpenModServer",
    tags: [
      <Tag key={0} size="sm" colorScheme={"orange"}>
        Full-stack
      </Tag>,
    ],
    arch: ["ASP.NET", "PostgreSQL"],
    year: "2022",
    link: "https://github.com/jacksonrakena/openmodserver",
    content: (
      <>
        <Stack spacing={12}>
          <Box>
            <Heading size="sm">Premise</Heading>
            OpenModServer is a web application for managing and hosting
            modifications for popular video games. It provides an easy-to-use
            interface for game players to download new mods for their favourite
            games, a simple way for mod developers to upload their mods, and a
            way for site administrators to moderate and verify submissions. It
            is built using ASP.NET Core, with a PostgreSQL database for storing
            user data.
          </Box>
          <Box>
            <Heading size="sm">Moderation</Heading>
            Accepting arbitrary user uploads has always been a challenge for
            websites, and OpenModServer is no exception. To combat this,
            OpenModServer uses a moderation system, where users can submit mods
            for approval, and site administrators can review and approve or
            reject them.
            <br />
            <br />
            This system is built using a PostgreSQL database, with a table for
            mods, releases, verifications, and users. In addition, OpenModServer
            automatically submits uploads to virus-checking site VirusTotal, and
            periodically pings VirusTotal to check if it has finished processing
            the file. Once it has been processed, OpenModServer will show the
            result to the site administrators in the review process.
          </Box>
          <Box>
            <Heading size="sm">Challenges</Heading>
            <ol>
              <li>
                Storing mod information, including the various releases, their
                approval statuses, reasons for approval/disapproval, and
                VirusTotal scanning status
              </li>
              <li>User profiles, including handling personal information</li>
              <li>
                Comments on mod listings, including pinned and deleting comments
              </li>
            </ol>
          </Box>
        </Stack>
      </>
    ),
  },
  {
    id: 0,
    name: "Gradekeeper",
    description:
      "The best way for university students to track their course progress.",
    link: "https://gradekeeper.xyz",
    year: "2022",
    arch: ["Next.js", "Prisma", "MySQL"],
    tags: [
      <Tag key={0} size="sm" colorScheme={"orange"}>
        Full-stack
      </Tag>,
    ],
    content: (
      <>
        <Stack spacing={12}>
          <Box>
            <Heading size="sm">Premise</Heading>
            Gradekeeper is a free and easy-to-use website and Progressive Web
            App (PWA) that allows university students to track their course
            progress.
            <br />
            <br />
            It provides helpful information about average grades, grades needed
            to reach a certain goal, and projected grades, based on what
            they&apos;ve already achieved.
          </Box>
          <Box>
            <Heading size="sm">Infrastructure</Heading>
            Gradekeeper is a Next.js app, using React and Chakra UI on the
            frontend, with Prisma ORM connected to a PlanetScale MySQL database
            for storing user data. It uses Google for authentication and account
            management.
          </Box>
          <Box>
            <Heading size="sm">Challenges</Heading>
            <ol>
              <li>
                Storing course information, including lots of nested data, in a
                relational database
              </li>
              <li>Calculating a projected grade for each course</li>
            </ol>
          </Box>
        </Stack>
      </>
    ),
  },
  {
    id: 3,
    name: "StreamApps",
    description: "Power up your stream with powerful tools for $5/month.",
    link: "https://streamapps.live",
    year: "2020",
    arch: ["Elixir", "Phoenix"],
    tags: [
      <Tag key={0} size="sm" colorScheme={"pink"}>
        Distributed
      </Tag>,
    ],
    content: (
      <>
        <Stack spacing={8}>
          <Text>
            <Heading size="sm">Premise</Heading>
            StreamTools is a subscription service that allows streamers and
            other content creators to have interactive and powerful on-stream
            tools for as little as $5/month.
          </Text>

          <Text>
            <Heading size="sm">Infrastructure</Heading>
            StreamTools primarily consists of a Phoenix web server, providing up
            generated pages on each request. It consists of a variety of
            utilities that perform different functions, but one of note is the{" "}
            <em>Engagement Counters</em>, which show the number of Twitter
            followers, Facebook likes, and other social media stats on a stream.
          </Text>
        </Stack>
      </>
    ),
  },
];

const pb: Project[] = [
  {
    id: 3,
    name: "Quicktable",
    description: "A simple timetable app for students at Scots College.",
    link: null,
    year: "2019",
    arch: ["React"],
    tags: [
      <Tag key={0} size="sm" colorScheme={"red"}>
        Service
      </Tag>,
    ],
    content: (
      <>
        <Stack spacing={8}>
          <Text>
            Quicktable was a free timetable and scheduling app for Scots College
            students, created to fill a need identified by the student body in
            the <em>2019 Scots College Digital Interaction Student Survey</em>.
          </Text>
          <Text>
            Using a student&apos;s unique ID number, the app could query their
            timetable from the school scheduling system and display it in an
            attractive, easy-to-use, and speedy manner, compared to the older
            system which required several clicks and logins to view a
            student&apos;s timetable.
          </Text>
        </Stack>
      </>
    ),
  },

  // {
  //   id: 1,
  //   name: "animalswithcoolhats.com",
  //   description: "Your number #1 source for animals with cool hats.",
  //   link: "https://animalswithcoolhats.com",
  //   year: "2021",
  //   arch: [".NET", "Postgres"],
  //   tags: [
  //     <Tag key={0} size="sm" colorScheme={"purple"}>
  //       Server-side
  //     </Tag>,
  //   ],
  //   content: (
  //     <>
  //       <Stack spacing={8}>
  //         <Text>
  //           animalswithcoolhats.com is a novelty website providing a endless
  //           rotating stream of pictures of animals wearing cool hats.
  //         </Text>
  //         <Text>
  //           A frequently asked question is &quot;what qualifies a hat as being
  //           cool?&quot;
  //         </Text>
  //         <Text>They all are.</Text>
  //       </Stack>
  //     </>
  //   ),
  // },
];

const ProjectTab = React.forwardRef(function ProjectTabUnreffed(
  props: {
    project: Project;
  },
  ref
) {
  const tabProps = useTab<{}>({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];

  const styles = useMultiStyleConfig("Tabs", tabProps);

  return (
    <Button __css={styles.tab} {...tabProps}>
      <Flex direction={"column"} alignItems={"start"} padding={2}>
        <Text>{props.project.name}</Text>
        <Text fontSize="sm" color={"GrayText"}>
          {props.project.arch.join(", ")}
        </Text>
        <Text fontSize="sm" color={"GrayText"}>
          {props.project.year}
        </Text>
        {props.project.tags && <Box mt={2}>{props.project.tags}</Box>}
      </Flex>
    </Button>
  );
});

const ProjectContent = (props: { project: Project }) => {
  return (
    <>
      <Box>
        {props.project.link ? (
          <Link
            color="primary.500"
            _hover={{ color: "primary.700" }}
            href={props.project.link}
            isExternal={true}
          >
            Visit
            <Icon as={FiExternalLink} w={4} h={4} mx="4px" />
          </Link>
        ) : (
          <></>
        )}
      </Box>
      <Flex mt={4} direction="column">
        <Text maxWidth="5xl">{props.project.content}</Text>
      </Flex>
    </>
  );
};

const Home: NextPage = () => {
  const cm = useColorMode();
  return (
    <React.Fragment>
      <div>
        <Head>
          <title>Jackson Rakena</title>
        </Head>
        <Box p={6}>
          <Stack spacing={2}>
            <Flex>
              <HStack spacing={4}>
                <Avatar
                  src={"https://avatars.githubusercontent.com/u/44521335?v=4"}
                  name={"Jackson Rakena"}
                />
                <Stack spacing={0}>
                  <Heading>Jackson&apos;s portfolio</Heading>
                  <Text fontSize="sm">
                    Wellington-based full-stack software engineer
                  </Text>
                </Stack>
              </HStack>
              <Spacer />
            </Flex>
            <Box fontSize={["sm", "md", "lg"]}>
              <Stack
                spacing={[1, 1, 4]}
                direction={["column", "column", "row"]}
              >
                <HStack spacing={1} alignItems={"center"}>
                  <ArrowBackIcon w={4} h={4} />
                  <ColorNextLink href="/">go back home</ColorNextLink>
                </HStack>
              </Stack>
            </Box>
          </Stack>
          <Stack spacing={6} mt={6}>
            <Box>
              I&apos;m a full-stack New Zealand software engineer with an
              interest in new and emerging frameworks and languages.
            </Box>
            <Box>
              I have 3 years of professional experience in React and frontend
              engineering. I have many years of hobby experience in backend
              programming, especially with ASP.NET and C#.
            </Box>
            <Box>
              I am studying for a <b>Bachelor of Engineering (Honours)</b> in{" "}
              <b>Software Engineering</b> at Victoria University of Wellington.
            </Box>
            <Box>
              At the moment, I&apos;m learning <b>Rust</b>.
            </Box>
          </Stack>
        </Box>
        <Box m={6}>
          <Heading size="lg" mb={4}>
            Projects
          </Heading>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Personal projects
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box>
                  <Tabs>
                    <TabList overflowX="auto" overflowY="hidden">
                      {projects.map((d) => (
                        <ProjectTab key={d.id} project={d} />
                      ))}
                    </TabList>
                    <TabPanels>
                      {projects.map((d) => (
                        <TabPanel key={d.id}>
                          <ProjectContent project={d} />
                        </TabPanel>
                      ))}
                    </TabPanels>
                  </Tabs>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Work projects &mdash; GoCloud
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box>
                  <Tabs>
                    <TabList overflowX="auto" overflowY="hidden">
                      {work.map((d) => (
                        <ProjectTab key={d.id} project={d} />
                      ))}
                    </TabList>
                    <TabPanels>
                      {work.map((d) => (
                        <TabPanel key={d.id}>
                          <ProjectContent project={d} />
                        </TabPanel>
                      ))}
                    </TabPanels>
                  </Tabs>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Service projects
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box>
                  <Tabs>
                    <TabList overflowX="auto" overflowY="hidden">
                      {pb.map((d) => (
                        <ProjectTab key={d.id} project={d} />
                      ))}
                    </TabList>
                    <TabPanels>
                      {pb.map((d) => (
                        <TabPanel key={d.id}>
                          <ProjectContent project={d} />
                        </TabPanel>
                      ))}
                    </TabPanels>
                  </Tabs>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box m={6}>
          <Heading size="lg" mb={4}>
            Interests
          </Heading>
          <Box>
            <UnorderedList>
              <ListItem>
                Emerging frameworks and technologies, like Elixir and Rust
              </ListItem>
              <ListItem>
                Innovative front-end frameworks, like Next.js and Svelte
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Home;
