import { Box, Heading, Stack } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <div>
      <Stack>
        <Heading>404 Not Found</Heading>
        <Box>
          Couldn't find that one. Try using the navigation at the top to get
          back to a page.
        </Box>
      </Stack>
    </div>
  );
}
