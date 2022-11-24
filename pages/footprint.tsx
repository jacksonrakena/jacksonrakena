import { Box, Code, Container, Heading, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { ColorLink } from ".";

const Footprint: NextPage = () => {
  const text = ["# My website.", "jacksonrakena.com"];
  return (
    <div>
      <Head>
        <title>Footprint</title>
      </Head>
      <Container>
        <Box py={6}>
          <VStack spacing={3} alignItems={"start"}>
            <Heading size={"lg"}>Digital footprint</Heading>
            <Box>
              The following is a list of all of domains that are controlled by
              me, at the registry level or higher.
              <br />
              <br />I act as the webmaster and postmaster for all of the
              asserted domains.
              <br /> You may contact me at{" "}
              <ColorLink
                linkProps={{ textDecor: "none" }}
                href="mailto:jackson@rakena.co.nz"
              >
                jackson@rakena.co.nz
              </ColorLink>
              .
              <br />
              <br />
              I make no guarantees as to the accuracy or completeness of the
              following list. This list is not exhaustive.
              <br />
              <br />
              Last updated: 2022-11-24T02:29:07+0000
            </Box>
            <Box width={"100%"} backgroundColor={"#f1f1f2"}>
              <Code>
                # My website. You{"'"}re here. <br />
                jacksonrakena.com <br />
                <br />
                # Family and friend purposes. Private. <br />
                rakena.co.nz <br />
                <br />
                # Controlled by my sole-trader proprietorship, Animals With Cool
                Hats. <br />
                animalswithcoolhats.com <br />
                streamtools.live <br />
                streamapps.live <br />
                gradekeeper.xyz
                <br />
              </Code>
            </Box>
            <ColorLink linkProps={{ textDecor: "none", target: "" }} href="/">
              {"<-"} Back
            </ColorLink>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default Footprint;
