import { 
  Container,
  Box,
  Heading,
  Image,
  Spacer
} from "@chakra-ui/react";

export default function Landing() {

  return (
    <Container centerContent size="lg">
      <Box
        display="flex"
        alignItems="center"
        borderRadius="xl"
        py="0"
        m={1}
      >
        <Image 
          src={`${process.env.PUBLIC_URL}/logo512.png`} 
          borderRadius="full"
          align="center"
        />
      </Box>
      <Spacer />
      <Box
        display="flex"
        alignItems="center"
        borderRadius="xl"
        py="0"
        m={1}
      >
        <Heading
          color="white"
          size="3xl"
        > {/* TODO Font Family: Comfortaa */}
          Dapp Ideas
        </Heading>
      </Box>
    </Container>
  )
}