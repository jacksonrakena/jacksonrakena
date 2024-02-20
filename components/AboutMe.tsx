import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BoldLink } from "./BoldLink";

export const AboutMe = () => {
  return (
    <Flex pb={16} alignItems={"center"} justifyContent={"space-between"}>
      <VStack alignItems={"start"}>
        {" "}
        <Box mb={4}>
          <Heading fontWeight={"extrabold"}>Jackson Rakena</Heading>
          <Box>Programmer, writer, university student.</Box>
        </Box>
        <Box fontSize={["sm", "md", "lg"]}>
          <Stack spacing={1}>
            <HStack spacing={2} alignItems={"center"}>
              <Icon w={5} h={5} as={BsGithub} />
              <BoldLink href="https://github.com/jacksonrakena">
                jacksonrakena
              </BoldLink>
            </HStack>
            <HStack spacing={2} alignItems={"center"}>
              <Icon w={5} h={5} as={FiMail} />
              <BoldLink href="mailto:jackson@rakena.co.nz">
                jackson@rakena.co.nz
              </BoldLink>
            </HStack>
          </Stack>
        </Box>
      </VStack>
      <Avatar
        src={"https://avatars.githubusercontent.com/u/44521335?v=4"}
        size={["xl", "2xl"]}
        name={"Jackson Rakena"}
      />
    </Flex>
  );
};
