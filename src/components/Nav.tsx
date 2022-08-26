import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Logo from "assets/images/github-logo.svg";

const Nav = () => {
  return (
    <Flex bg="#161a22" px={10} py={3} position={'fixed'} w={'full'} top={0} left={0} zIndex={500}>
        <Image src={Logo} w={30}  />
    </Flex>
  )
}

export default Nav