import React, { useEffect, useState } from 'react';
import Logo from "assets/images/github-logo.svg";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Text,
    VStack,
    Image,
    Center,
    Button,
    Flex
  } from '@chakra-ui/react'

//   @ts-ignore
import LoginGithub  from  "react-login-github"
import { Octokit } from 'octokit';
import { signInWithGithub } from 'services/utilities/helpers';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = () => {
// @ts-ignore
    const {isAuthenticated} = useSelector(state => state.authState)
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
      if(isAuthenticated){
                navigate('/profile', {
                    replace : true
                })
      }
    }, [isAuthenticated])

    const signIn = async( ) => {

        try {

            setloading(true)
            await signInWithGithub()
            
        } catch (error) {
            console.log({error});
            alert("Something went wrong, please try again!")
        }
        finally{
            setloading(false)
        }

    }
    
    
    
  return (
    <main className='bg-[#0d1117] h-screen'>
        <Center flexDirection={"column"}  pt={16} className="w-80 mx-auto" >
            <VStack spacing={7} mb={3}>
                <Image src={Logo} w={50} objectFit="contain" />
                <Text color="gray.300" fontSize={"2xl"}>Sign in to GitHub</Text>
            </VStack>

            <form className='bg-[#161a22] border border-[#21262e] p-5 rounded-lg w-80'>


                <Button isLoading={loading} bg="#238636" _hover={{backgroundColor: "green.500"}} size={"lg"} w="full" color={"white"} onClick={signIn}>Sign in</Button>
            </form>

        </Center>
        
    </main>
  )
}

export default Login