import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Logo from "../assets/images/github-logo.svg";

const Nav = () => {
  return (
    <Flex bg="#161a22" px={10} py={3}>
        <Image src={Logo} w={30}  />
    </Flex>
  )
}

export default Nav