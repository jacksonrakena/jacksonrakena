import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
} from "@chakra-ui/react";

interface ShowcasedProject {
  id: number;
  name: string;
  description: string;
  link: string;
  icon?: string;
  hint?: string;
  tags: string[];
}

const projects: ShowcasedProject[] = [
  {
    id: 0,
    name: "Gradekeeper",
    description: "The all-in-one course and grade management app for students.",
    link: "https://gradekeeper.xyz",
    icon: "https://app.gradekeeper.xyz/android-chrome-512x512.png",
    tags: ["Next.js", "Prisma", "MySQL"],
  },
  {
    id: 1,
    name: "Jacksonbot",
    description:
      "A fun chat-bot that can play blackjack and show you pictures of cats.",
    link: "https://github.com/jacksonrakena/jacksonbot",
    icon: "https://d.lu.je/avatar/679925967153922055",
    tags: ["C#", "PostgreSQL"],
  },
  {
    id: 2,
    name: "Project Spork",
    description:
      "Data analysis and visualization for New Zealand's House of Representatives.",
    link: "https://github.com/jacksonrakena/spork",
    icon: "/assets/spork.svg",
    tags: ["Rust", "React", "Data Analysis"],
  },
];

export const ShowcasedProjects = () => {
  return (
    <>
      <Heading size="md"></Heading>
      <Flex py={4} flexDirection={"column"}>
        {projects.map((project) => (
          <LinkBox key={project.id} mb={4} w={"100%"}>
            <HStack
              spacing={2}
              alignItems={"center"}
              p={4}
              _hover={{
                borderColor: "primary.400",
              }}
              transition={"0.2s"}
              key={project.id}
              direction={"row"}
              borderWidth={"1px"}
              rounded={"lg"}
            >
              <Box>
                <LinkOverlay
                  target="_blank"
                  rel="noreferrer"
                  href={project.link}
                >
                  <Heading size="sm">
                    {project.name}
                    <Text
                      fontWeight={"normal"}
                      display={"inline"}
                      color="GrayText"
                    >
                      {" "}
                      {project.hint}
                    </Text>
                  </Heading>
                </LinkOverlay>
                <Text>{project.description}</Text>
                <HStack mt={2}>
                  {project.tags?.map((t) => (
                    <Tag colorScheme={"primary"} key={t} size="sm">
                      {t}
                    </Tag>
                  ))}
                </HStack>
              </Box>
              {project.icon && (
                <Box>
                  <Avatar name={project.icon} src={project.icon} />
                </Box>
              )}
            </HStack>
          </LinkBox>
        ))}
      </Flex>
    </>
  );
};
