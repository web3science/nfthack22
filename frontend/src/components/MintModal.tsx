import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Image,
  HStack
} from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";

type Props = {
  isOpen: any;
  onClose: any;
  data?: any;
};

export default function MintModal({ isOpen, onClose, data }: Props) {

  const { account } = useEthers()

  const title = data.title
  const desc = data.desc
  const addr = data.addr ? data.addr : account
  const img = data.img.length? data.img[0] : null

  function minter() {
    console.log(data)

    // TODO mint Zora-721
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent
        background="gray.900"
        border="1px"
        borderStyle="solid"
        borderColor="gray.700"
        borderRadius="3xl"
      >
        <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium">
          {title}
        </ModalHeader>

        <ModalBody pt={0} px={4}>
          <Box
            borderRadius="3xl"
            border="1px"
            borderStyle="solid"
            borderColor="gray.600"
            px={5}
            pt={4}
            pb={2}
            mb={3}
          >
            {
              img? (
                <Flex justifyContent="space-between" alignItems="center" mb={3}>
                  <Image src={URL.createObjectURL(img)} />
                </Flex>
              ) : (<></>)
            }
            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
            </Flex>
            <Flex alignContent="center" m={3}>
              <Text color="white" align="justify">
                {desc}
              </Text>
            </Flex>
          </Box>
        </ModalBody>


        <ModalFooter
          justifyContent="end"
          background="gray.700"
          borderBottomLeftRadius="3xl"
          borderBottomRightRadius="3xl"
          p={6}
        >
          <HStack spacing={4}>
            <Text
              color="white"
              textAlign="left"
              fontWeight="medium"
              fontSize="md"
            >
              Payout Address: {addr}
            </Text>
            <Button onClick={minter}>Mint</Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}