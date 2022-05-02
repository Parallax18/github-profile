import React, { useEffect } from 'react';
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
    const navigate = useNavigate()
    useEffect(() => {
      if(isAuthenticated){
                navigate('/profile', {
                    replace : true
                })
      }
    }, [isAuthenticated])
    
    
    
  return (
    <main className='bg-[#0d1117] h-screen'>
        <Center flexDirection={"column"}  pt={16} className="w-80 mx-auto" >
            <VStack spacing={7} mb={3}>
                <Image src={Logo} w={50} objectFit="contain" />
                <Text color="gray.300" fontSize={"2xl"}>Sign in to GitHub</Text>
            </VStack>

            <form className='bg-[#161a22] border border-[#21262e] p-5 rounded-lg w-80'>
                {/* <VStack spacing={3}>
                <FormControl>
                    <FormLabel htmlFor='email' color={"gray.300"} fontSize="sm">Username or email address</FormLabel>
                    <Input id='email' type='email' bg="#0d1117"  borderColor={"#21262e"} size="sm" rounded={"md"} color={"gray.300"} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email' color={"gray.300"} fontSize="sm" display={"flex"} w="full" justifyContent="space-between">
                        <Text>Password</Text>
                        <Text color="#4c8dd8" fontSize={"xs"}>Forgot password?</Text>
                    </FormLabel>
                    <Input id='password' type='password'  bg="#0d1117"  borderColor={"#21262e"} size="sm" rounded={"md"} color={"gray.300"}/>
                </FormControl>
                </VStack> */}

                <Button bg="#238636" _hover={{backgroundColor: "green.500"}} size={"lg"} w="full" color={"white"} onClick={signInWithGithub}>Sign in</Button>
            </form>

            {/* <Flex fontSize={"sm"} color="white" p={5} justifyContent="center" rounded={"lg"} w="full" mt={5} className="border-[#21262e] border">
                <Text color={"gray.300"}>New to Github?</Text>
                <Text color="#4c8dd8" ml="1">Create an account</Text>.
            </Flex> */}
        </Center>
        
    </main>
  )
}

export default Login