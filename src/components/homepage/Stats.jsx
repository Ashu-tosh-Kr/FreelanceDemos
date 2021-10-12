import { Avatar, AvatarBadge } from '@chakra-ui/avatar';
import Icon from '@chakra-ui/icon';
import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/layout';

import { BiShareAlt, BiDotsHorizontalRounded } from 'react-icons/bi';

import Btn from 'components/util/Btn';
import CategoryTag from 'components/util/CategoryTag';

import verifiedBadge from 'assets/global/verifiedBadge.svg';
import { Image } from '@chakra-ui/image';

const Stats = () => {
  return (
    <VStack w="15%" bg="blue.sbg" spacing={4} py={6} px={3}>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/code-beast" size="lg">
        <AvatarBadge top="-2" border="0" left="-4" boxSize="1em">
          <Image src={verifiedBadge} />
        </AvatarBadge>
      </Avatar>
      <Center display="flex" flexDirection="column">
        <Text display="flex" textStyle="name">
          <Box as="p" color="purple.dark">
            @
          </Box>
          Giovanna85
        </Text>
        <Text textStyle="info">5M Subcribers</Text>
        <Text color="text.sec" fontSize="10px">
          Entertainment
        </Text>
      </Center>
      <Text
        fontSize="20px"
        fontWeight="semibold"
        lineHeight="100%"
        textAlign="center"
      >
        Voluptas Incidunt Rerum Sequi Voluptatibus Nobis Nihil.{' '}
      </Text>
      <Btn bgColor="purple.dark" text="Subscribe" />
      <HStack>
        <Icon
          bgColor="blue.pbg"
          borderRadius="full"
          boxSize={8}
          p={1.5}
          color="purple.light"
          as={BiShareAlt}
        />
        <Icon
          bgColor="blue.pbg"
          borderRadius="full"
          boxSize={8}
          p={1.5}
          color="purple.light"
          as={BiDotsHorizontalRounded}
        />
      </HStack>
      <SimpleGrid columns={3} spacing={1}>
        <CategoryTag name="Compress" />

        <CategoryTag name="Protocol" />

        <CategoryTag name="Compress" />

        <CategoryTag name="Protocol" />
      </SimpleGrid>
    </VStack>
  );
};

export default Stats;
