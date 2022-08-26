import {Box, VStack} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RepositoryItem from './RepositoryItem'
import TopBar from './TopBar'
import { useGetRepositoriesQuery } from 'features/api/apiSlice'
import { IRepo } from 'services/model/repo'
import { useSelector } from 'react-redux'
import Lottie from "lottie-react";
import loadingAnimation from 'assets/lottie/loader.json'
 
const MainSection = () => {

  // @ts-ignore
  const {user} = useSelector(state => state.authState)

  console.log(user)

  const {data, error, isLoading, isSuccess, isError } = useGetRepositoriesQuery(user.username)

  const [repoData, setRepoData] = useState([])

  useEffect(() => {
      data && setRepoData(data)
  }, [data])
  


  const search = (v,type) => {
    console.log({v, type})
    if(!type.length) {

      setRepoData(data)
      return
    }

    const searched = data.filter((i) =>  i[type] && i[type].toLowerCase().includes(v.toLowerCase()))

    console.log(searched)

    setRepoData(searched)
  }
  
  return (
    <Box ml={300} minW={1000} maxW={'full'}>
        <TopBar searchRepo={search} />


        <VStack mt={5} w={"full"} >
        {isLoading && 
        <Lottie animationData={loadingAnimation}
          height={400}
          width={400}
          autoplay
          loop
          />

        }
          
          {!isLoading && repoData?.slice(0,20).map((repo : IRepo)=>(
            <RepositoryItem repo={repo} />
          ))}
          
        </VStack>
    </Box>
  )
}

export default MainSection