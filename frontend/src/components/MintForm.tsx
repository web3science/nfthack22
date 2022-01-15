import {
  Button,
  Image,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  Box,
  useDisclosure
} from "@chakra-ui/react";
import { useForm, SubmitHandler, FormProvider, useFormContext } from "react-hook-form";
import React from 'react';

import { FormValues } from "./FormTypes"
import MintModal from "./MintModal";

export default function MintForm() {

  let [img, setImg] = React.useState(null)
  let [data, setData] = React.useState(null)

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit: SubmitHandler<FormValues> = (d: any) => {
    console.log(d)
    setData(d)
    onOpen()
  }

  let handleUpload = (e: any) => {
    setImg(e.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="title" color="white">Title</FormLabel>
          <Input 
            id="title" 
            color="white"
            {...register("title", {
              required: "Every project needs a title"
            })}
          />
          <FormHelperText>
            What are you calling your project?
          </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="desc" color="white">Description</FormLabel>
          <Textarea
            id="desc"
            color="white"
            {...register("desc", {
              required: "Every project needs a description"
            })}
          />
          <FormHelperText>
            Describe your project for funders
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="addr" color="white">Payout Address</FormLabel>
          <Input 
            id="addr" 
            color="white"
            {...register("addr")}
          />
          <FormHelperText>Where should the funds go?</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="image" color="white">Upload Image</FormLabel>
          <Input 
            type="file"
            accept=".png, .jpg, .gif"
            id="image"
            {...register("img")}
            onChange={handleUpload}
            variant='unstyled'
            isRequired
          />
        </FormControl>
        <Box 
          display="flex"
          alignItems="center"
          >
          {
            img ? (
              <Image 
              src={URL.createObjectURL(img)} 
              boxSize={20}
              borderRadius="full"
              />) : (
                <Text color="gray.500" align="center">
                No image provided
              </Text>
            )
          }
        </Box>
        <Button colorScheme='teal' size='md' type="submit">
          Submit
        </Button>
        {
          data? (
            <MintModal isOpen={isOpen} onClose={onClose} data={data}/> 
          ) : (<></>)
        }
      </Stack>
    </form>
  )
}