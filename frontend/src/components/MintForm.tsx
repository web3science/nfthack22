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
  useToast
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import React from 'react';

type FormValues = {
  title: string,
  desc: string,
  addr: string,
  img: FileList
}

export default function MintForm() {

  let [img, setImg] = React.useState(null)
  let [data, setData] = React.useState(null)

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const toast = useToast( )

  const onSubmit: SubmitHandler<FormValues> = (d: any) => {
    console.log(d)
    setData(d)


    // Mint NFT




    toast({
      title: "Submitted!",
      status: "success",
      duration: 3000,
      isClosable: true
    });
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
            // value={title}
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
            // value={value}
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
            // value={addr}
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
      </Stack>
    </form>
  )
}