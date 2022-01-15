import {
  Text,
} from "@chakra-ui/react";

type FormValues = {
  title: string,
  desc: string,
  addr: string,
  img: FileList
}

export default function MintForm() {

  return (
    <Text color="white">Form</Text>
  )
}