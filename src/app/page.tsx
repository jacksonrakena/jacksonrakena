import { Avatar, Card, Flex, Box, Text, Container, Separator, Link } from "@radix-ui/themes";

export default function Site() {
  return (
    <Container size="1">
      <Flex pt={'150px'} direction={'column'} gap="4" justify={'center'}>
        <Card>
          <Flex gap="3" align="center">
            <Avatar
              src="https://avatars.githubusercontent.com/u/44521335?v=4"
              fallback="JR"
            />
            <Box>
              <Text as="div" size="2" weight="bold">
                Jackson Rakena
              </Text>
            </Box>
          </Flex>
        </Card>

        <Box>
          <Text size="2">
            Kubernetes engineer at Atlassian
            <Separator my="3" size="4" />
            <Flex gap="3" align="center">
              <Link href="https://github.com/jacksonrakena">
                jacksonrakena
              </Link>
              <Separator orientation="vertical" />
              <Link href="mailto:jackson@rakena.com.au">
                jackson@rakena.com.au
              </Link>
              <Separator orientation="vertical" />
              Sydney, Australia
            </Flex>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};
