import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
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
    description:
      "The all-in-one course and grade management app, used by 600+ students at 15+ universities across the world",
    link: "https://gradekeeper.xyz",
    icon: "https://app.gradekeeper.xyz/icons/android-chrome-512x512.png",
    tags: ["Next.js", "Prisma", "MySQL"],
  },
  {
    id: 2,
    name: "Jacksonbot",
    description:
      "A Discord chat-bot that can play blackjack and show you pictures of cats. Serves over 50,000 users.",
    link: "https://github.com/jacksonrakena/jacksonbot",
    icon: "https://d.lu.je/avatar/679925967153922055",
    tags: ["Rust", "Diesel", "PostgreSQL"],
  },
  {
    id: 1,
    name: "Ace In The Hole",
    description:
      "An online, multiplayer casino game with Texas Hold 'Em poker, blackjack, and 3-card poker.",
    link: "https://github.com/jacksonrakena/ace-in-the-hole",
    icon: "/assets/king_spades_white.png",
    tags: ["Unity", "Networking", "C#"],
  },
];

export const ShowcasedProjects = () => {
  return (
    <>
      <Stack spacing={4} alignItems={"baseline"}>
        <Heading size="md">Some stuff I've made</Heading>
        <Flex flexDirection={"column"}>
          {projects.sort((a,b)=>a.id-b.id).map((project) => (
              <LinkBox key={project.id} mb={4} w={"100%"}>
                <HStack
                  spacing={2}
                  alignItems={"center"}
                  p={4}
                  _hover={{
                    borderColor: "gray.400",
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
                        <Tag colorScheme={"gray"} key={t} size="sm">
                          {t}
                        </Tag>
                      ))}
                    </HStack>
                  </Box>
                  {project.icon && (
                    <Box>
                      <Avatar
                        background={"white"}
                        name={project.icon}
                        src={project.icon}
                      />
                    </Box>
                  )}
                </HStack>
              </LinkBox>
            ))}
        </Flex>
      </Stack>
    </>
  );
};
