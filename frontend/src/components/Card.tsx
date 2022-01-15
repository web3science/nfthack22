import {
  Box,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Card() {

  function expand() {

  }

  return (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      p={5}
    >
      <Stack spacing={4}>
        <Text color="white">Image</Text>
        <Text color="white">Title</Text>
        <Button 
          colorScheme="green"
          onClick={expand}  
        >...</Button>
      </Stack>
    </Box>
  )
}