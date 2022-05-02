import React, { useEffect } from 'react';
import MainSection from '../../components/MainSection';
import { Center, Flex } from '@chakra-ui/react';
import Nav from '../../components/Nav';
import SideSection from '../../components/SideSection';



const Profile = () => {
    
    
  return (
//    <MainSection />
   <>
        <Nav />
        <Center alignItems={"start"} mt={16} px={32} >
          <Flex alignItems={"start"} justifyContent="space-between" >
            <SideSection />
            <main className='full ml-7 w-full'>
              <MainSection />
            </main>
          </Flex>
        </Center>
      </> 
  )
}
export default Profile