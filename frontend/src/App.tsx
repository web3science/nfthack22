import { ChakraProvider, useDisclosure, Spacer } from "@chakra-ui/react";

import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import Content from "./components/Content";


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen}/>
        <AccountModal isOpen={isOpen} onClose={onClose} />
        <Spacer />
        <Content />
        <Spacer />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
