import {
  Flex,
  Box,
  Spacer,
  Text,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels
} from "@chakra-ui/react";

import MintForm from "./MintForm";
import Marketplace from "./Marketplace";


export default function Home() {

  // TODO get grants from the blockchain

  return (
    <Tabs variant='soft-rounded' colorScheme='green'>
      <TabList>
        <Tab>Mint a Grant</Tab>
        <Tab>Fund someone</Tab>
        <Tab>View History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MintForm />
        </TabPanel>
        <TabPanel>
          <Marketplace />
        </TabPanel>
        <TabPanel>
          <Text color="white">History</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}