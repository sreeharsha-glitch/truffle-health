import { Box, Text, Heading } from "@chakra-ui/react";
import { GET_TODAYS_DATE } from "../utils/date.utils";

export function Welcome({ userName }) {
  const todayDate = GET_TODAYS_DATE();
  return (
    <Box py="1.6rem">
      <Heading as='h1' size='md' noOfLines={1}>
        Hello, {userName}👋
      </Heading>
      <Text color="grey">Today is {todayDate}</Text>
    </Box>
  );
}
