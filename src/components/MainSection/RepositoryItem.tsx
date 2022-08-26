import { Flex, HStack, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import { IRepo } from 'services/model/repo'
import moment from "moment";
import Skeleton from 'react-loading-skeleton';

interface Props {
    repo: IRepo
}


const RepositoryItem = ({repo}: Props) => {

    console.log("here",  repo);
    
    const {url, name, description, language, visibility, updated_at } = repo

    const Colors = {
        JavaScript: "bg-yellow-300",
        HTML: "bg-red-900",
        CSS: "bg-blue-300",
        SCSS: "bg-pink-300",
        null: "bg-gray-700"
    }



  return (
      <Flex py={5} borderTop="1px" w="full">
     
            <VStack alignItems="start">
                <HStack>
                    <Text fontWeight={"bold"} color="#4c8dd8" fontSize="xl" >{name || <Skeleton />}</Text>
                    <Text color={"gray"} border="1px" fontSize={"xs"} px={2} rounded="full" fontWeight={"bold"} >{visibility}</Text>
                </HStack>
                <Text color={"gray.400"} textAlign="left">{description}</Text>
                
                <HStack>
                    <Box display={"flex"} alignItems="center" >
                        <div className={` ${Colors[language]} w-3 h-3 rounded-full`} />
                        <Text fontSize={"xs"} color={"gray.400"} ml={1} >{language}</Text>
                    </Box>
                    <Text fontSize={"xs"} color={"gray.400"} >Updated {moment(updated_at).startOf('day').fromNow()}</Text>
                </HStack>
            </VStack>

        </Flex>
  
  )
}

export default RepositoryItem