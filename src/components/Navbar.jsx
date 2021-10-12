import { Avatar } from '@chakra-ui/avatar';
import { Image } from '@chakra-ui/image';
import { Box, Flex, HStack, SimpleGrid, Spacer, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Tag, TagLabel } from '@chakra-ui/tag';

import { ChevronDownIcon, Icon, Search2Icon } from '@chakra-ui/icons';
import { BsSquare } from 'react-icons/bs';

import brandLogo from 'assets/global/brandLogo.svg';
import utoosCoin from 'assets/global/utoosCoin.svg';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import CategoryTag from './util/CategoryTag';

const Navbar = () => {
  return (
    <Flex px={4} bg="#2D3166" h="56px" align="center">
      <Image w="100px" src={brandLogo} alt="Segun Adebayo" />
      <Spacer />
      <SimpleGrid columns={3} spacing={10}>
        <Text fontSize="md">Featured events</Text>
        <Text fontSize="md">Popular streams</Text>
        <Menu>
          <MenuButton as={Text}>
            Categories
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>Item A</MenuItem>
            <MenuItem>Item B</MenuItem>
          </MenuList>
        </Menu>
      </SimpleGrid>
      <Box w="45%">
        <InputGroup size="sm">
          <Input
            bg="blue.pbg"
            borderRadius="50"
            variant="filled"
            placeholder="Search event/stream"
          />
          <InputRightElement width="100%">
            <HStack ml="auto" mr={5} spacing="10px">
              <Tag
                size={'sm'}
                key={'sm'}
                borderRadius="full"
                variant="solid"
                bgColor="white"
              >
                <TagLabel color="black">All</TagLabel>
              </Tag>
              <CategoryTag name="Nearby" />
              <Menu>
                <MenuButton
                  borderRadius="full"
                  bgColor="purple.light"
                  size={'sm'}
                  key={'sm'}
                  as={Tag}
                >
                  Country
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Item A</MenuItem>
                  <MenuItem>Item B</MenuItem>
                </MenuList>
              </Menu>
              <CategoryTag name="Popular" />
              <CategoryTag name="English" />
              <CategoryTag name="Funny" />
              <CategoryTag name="..." />

              <Search2Icon />
            </HStack>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Spacer />
      <HStack spacing="24px">
        <Tag
          p={1}
          w={36}
          size="md"
          key="xxl"
          borderRadius="full"
          variant="solid"
          bgColor="blue.pbg"
        >
          <Image boxSize="25px" mx="auto" src={utoosCoin} alt="utoos" />
          <TagLabel mr="auto">Get Utoos</TagLabel>
        </Tag>

        <Icon as={BsSquare} />

        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="sm"
        />
      </HStack>
    </Flex>
  );
};

export default Navbar;
