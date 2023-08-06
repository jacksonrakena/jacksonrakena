import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ColorLink } from "../pages";

export const AboutMe = () => {
  return (
    <Box py={6}>
      <Stack spacing={2}>
        <Flex>
          <HStack spacing={2}>
            <Avatar
              src={"https://avatars.githubusercontent.com/u/44521335?v=4"}
              name={"Jackson Rakena"}
            />
            <VStack alignItems={"start"}>
              {" "}
              <Heading marginBottom={0} paddingBottom={0}>
                Jackson Rakena
              </Heading>
              <Box marginTop={0}>Programmer, writer, university student.</Box>
            </VStack>
          </HStack>
          <Spacer />
        </Flex>
        <Box fontSize={["sm", "md", "lg"]}>
          <Stack spacing={1}>
            <HStack spacing={2} alignItems={"center"}>
              <Icon w={5} h={5} as={BsGithub} />
              <ColorLink href="https://github.com/jacksonrakena">
                jacksonrakena
              </ColorLink>
            </HStack>
            <HStack spacing={2} alignItems={"center"}>
              <Icon w={5} h={5} as={FiMail} />
              <ColorLink href="mailto:jackson@animalswithcoolhats.com">
                jackson@rakena.co.nz
              </ColorLink>
            </HStack>
            <HStack spacing={2} alignItems={"center"}>
              <Icon w={5} h={5} as={BsTwitter} />
              <HStack spacing={1}>
                <ColorLink href="https://twitter.com/nwxjackson">
                  @nwxjackson
                </ColorLink>
                {/* <Box>&bull;</Box>
                <ColorLink href="https://mastodon.nz/@jackson">
                  @jackson@mastodon.nz
                </ColorLink> */}
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Stack>
      <Box mt={6}>Programmer, writer, university student.</Box>
    </Box>
  );
};
