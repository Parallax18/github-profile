import { VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RepositoryItem from './RepositoryItem'
import TopBar from './TopBar'
import reposTask from "../../services/api/tasks/github/repos"
import { useGetRepositoriesQuery } from '../../features/api/apiSlice'
import { IRepo } from '../../services/model/repo'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
 
const MainSection = () => {

  // @ts-ignore
  const {user} = useSelector(state => state.authState)

  console.log(user)

  const {data, error, isLoading, isSuccess, isError } = useGetRepositoriesQuery(user.username)

  const [repoData, setRepoData] = useState([])

  useEffect(() => {
      console.log(isLoading)
      data && setRepoData(data)
  }, [data])
  


  const search = (v,type) => {
    console.log({v, type})
    const searched = data.filter((i) =>  i[type] && i[type].toLowerCase().includes(v.toLowerCase()))

    console.log(searched)

    setRepoData(searched)
  }


  
  return (
    <>
        <TopBar searchRepo={search} />


        <VStack mt={5} w={"full"} >
          {repoData?.slice(0,20).map((repo : IRepo)=>(
            <RepositoryItem repo={repo} />
          ))}
          
        </VStack>
    </>
  )
}

export default MainSection