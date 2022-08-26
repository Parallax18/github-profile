import { VStack, Box, Image, Stack, Text, Button, Flex, HStack } from '@chakra-ui/react'
import React from 'react';
import { FiSmile, FiUsers, FiMail } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go"
import { useSelector } from 'react-redux';

const SideSection = () => {

    // @ts-ignore
    const {user} = useSelector(state => state.authState)

  return (
      <Box position={'fixed'}>
        <VStack>
            <Box position={"relative"}>
                <Box rounded="full" className='border-4 border-[#21262e]'>
                    <Image rounded="full" w={300} objectFit={"cover"} src={user.photoUrl}fallbackSrc='https://imgs.search.brave.com/dTEgsuVDa8Ld7effeS7oohIP6FFKFbWA0-qspVeOmZo/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/ekJKaDdPc0dhSFlv/WVgxcE1qMXV3SGFI/YSZwaWQ9QXBp' />
                </Box>
                <Box className='border border-[#21262e] bg-[#0d1117] p-3 rounded-full absolute bottom-10 right-0'>
                    <FiSmile color='grey' size={20}/>
                </Box>
            </Box>
            <Stack spacing={0} alignItems="start" w="full">
                <Text color={"gray.300"} fontSize={"2xl"} fontWeight={"bold"} >{user.displayName}</Text>
                <Text color={"gray.500"} fontSize={"2xl"}>{user.username}</Text>
            </Stack>

            {/* <VStack w="full"> */}
                <Button className='border border-[#21262e]'  fontWeight={"bold"} bg="#161a22" _hover={{backgroundColor: "gray.800", border: "1px solid gray"}} size={"sm"} w="full" color={"gray.300"}>Edit profile</Button>
            
            <HStack w="full" alignItems={"start"}>
                    <Flex color={"gray.500"} alignItems="center">
                        <FiUsers />
                        <Text ml={1} fontSize="sm">
                            <Text><b className='text-gray-300'>{user.followers}</b> followers</Text>
                        </Text>
                    </Flex>
                    <Box className='text-gray-300 items-center justify-center'>.</Box>
                    <Flex color={"gray.500"} fontSize="sm" alignItems="center">
                        <Text>
                            <Text><b className='text-gray-300'>{user.following}</b> following</Text>
                        </Text>
                    </Flex>
            </HStack>
            {/* </VStack> */}
        </VStack>

        <VStack w="full" alignItems={"start"}  mt={7}>
            <HStack color={"gray.500"}>
                <GoLocation />
                <Text fontSize="sm">Abuja</Text>
            </HStack>
            <HStack color={"gray.500"}>
                <FiMail />
                <Text fontSize="sm">{user.email}</Text>
            </HStack>
            {user.twitter_username && (
                <HStack color={'gray.500'}>
                    <FaTwitter />
                    <Text fontSize="sm">{user.twitter_username}</Text>
                </HStack>
            )}
        </VStack>

        <Box borderTop={"1px"} mt={10} alignItems="start" pt={5}>
            <Text color="gray.300" textAlign={"left"} fontWeight={"bold"}>Organzations</Text>
            <HStack></HStack>
        </Box>
      </Box>
    
  )
}

export default SideSection