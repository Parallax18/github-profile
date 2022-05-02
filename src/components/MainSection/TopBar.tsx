import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    Input,
    Button
  } from '@chakra-ui/react'

import React from 'react'
import { FiChevronDown } from "react-icons/fi"

const TopBar = ({searchRepo}) => {

    const handleSearch = (value, type) => {
        searchRepo(value, type)
    }

  return (
    <>
    <HStack className='w-full' alignItems={"center"} justifyContent="center">
        <Input onChange={(e) => handleSearch(e.target.value, "name")}  id='search' placeholder='Find a repository' minW={500} flex={1} type='text' bg="#0d1117"  borderColor={"#21262e"} size="sm" rounded={"md"} color={"gray.300"} />
        <Menu direction='ltr'>
            <MenuButton color={"gray"} fontSize="sm" sx={{bg: "#161a22"}} as={Button} h={7} rightIcon={<FiChevronDown />}>
                Type
            </MenuButton>
            <MenuList sx={{bg: "#161a22", border: "1px solid #21262e"}} color={"gray"}>
                <MenuItem>All</MenuItem>
                <MenuItem>Public</MenuItem>
                <MenuItem>Private</MenuItem>
                <MenuItem>Sources</MenuItem>
                <MenuItem>Forks</MenuItem>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton  color={"gray"} fontSize="sm" sx={{bg: "#161a22"}} as={Button} h={7} rightIcon={<FiChevronDown />}>
                language
            </MenuButton>
            <MenuList>
                <MenuItem>All</MenuItem>
                {/* @ts-ignore */}
                <MenuItem value="Javascript" type={"button"} onClick={(e) => handleSearch(e.target.value, "language")}>Javascript</MenuItem>
                <MenuItem>Vue</MenuItem>
                <MenuItem>CSS</MenuItem>
                <MenuItem>HTML</MenuItem>
                <MenuItem>Typescript</MenuItem>
                <MenuItem>SCSS</MenuItem>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton color={"gray"} fontSize="sm" sx={{bg: "#161a22"}} as={Button} h={7} rightIcon={<FiChevronDown />}>
                Sort
            </MenuButton>
            <MenuList>
                <MenuItem>Last updated</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Stars</MenuItem>
            </MenuList>
        </Menu>
    </HStack>
    </>
  )
}

export default TopBar