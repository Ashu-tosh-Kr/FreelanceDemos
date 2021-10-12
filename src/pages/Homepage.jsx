import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';

import Stats from 'components/homepage/Stats';

import viewerPill from 'assets/temp/viewerPill.svg';
import streaming from 'assets/global/streaming.jpg';
import DonationPanel from 'components/homepage/DonationPanel';
import Chat from 'components/homepage/Chat';

const Homepage = () => {
  return (
    <Flex h="calc(100vh - 56px)" color="white">
      <Stats />
      <Box pos="relative" bg="blue.pbg" w="29%" overflow="hidden">
        <Image
          pos="absolute"
          right="2rem"
          top="1rem"
          objectFit="cover"
          alt="stream"
          src={viewerPill}
        />
        <Image objectFit="cover" alt="stream" src={streaming} />
      </Box>
      <DonationPanel />
      <Chat />
    </Flex>
  );
};

export default Homepage;
