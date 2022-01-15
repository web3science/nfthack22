import {
  HStack,
  Button,
} from "@chakra-ui/react";

import Card from "./Card";

export default function Marketplace() {
  
  // TODO query chain for cards

  function gotoNext() {
    // query next one
  }
  
  return (
    <HStack
      spacing={4}
    >
      <Card

      />
      <Button 
        colorScheme="teal" 
        onClick={gotoNext} 
      >Next</Button>
    </HStack>
  )
}