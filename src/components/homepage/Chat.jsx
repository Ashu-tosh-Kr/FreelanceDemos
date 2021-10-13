import { Avatar, AvatarBadge } from '@chakra-ui/avatar';
import { Image } from '@chakra-ui/image';
import { Box, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';

import Btn from 'components/util/Btn';

import verifiedBadge from 'assets/global/verifiedBadge.svg';
import utoosCoin from 'assets/global/utoosCoin.svg';
import emoji from 'assets/chat/emoji.svg';

const Message = ({ src, name, text, hcolor, ...rest }) => {
  return (
    <>
      <Box
        pos="relative"
        bgColor="blue.fg"
        borderRadius="md"
        py={4}
        px={6}
        {...rest}
      >
        <Avatar
          pos="absolute"
          left="-15px"
          name="Dan Abrahmov"
          src={src}
          size="sm"
        />
        <Text textStyle="name" color={hcolor ? hcolor : 'text.sec'}>
          {name}
        </Text>
        <Text textStyle="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam
          eius veniam deleniti odio rem officiis, neque, adipisci consectetur
          fuga ab earum magni hic repellat atque voluptate est ex voluptas!
          {text}
        </Text>
      </Box>
    </>
  );
};

const StreamerMessage = ({ src, name, text, hcolor, ...rest }) => {
  return (
    <Flex width="100%" justify="end">
      <Spacer />
      <Box
        pos="relative"
        bgColor="white"
        borderRadius="md"
        py={4}
        px={6}
        {...rest}
      >
        <Avatar
          pos="absolute"
          right="-15px"
          name="Dan Abrahmov"
          src={src ? src : 'https://bit.ly/code-beast'}
          size="sm"
        >
          <AvatarBadge top="0" border="0" left="-2" boxSize="1em">
            <Image src={verifiedBadge} />
          </AvatarBadge>
        </Avatar>
        <Text textStyle="name" color={hcolor ? hcolor : 'text.sec'}>
          {name}
        </Text>
        <Text textStyle="info" color="blue.pbg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

const Chat = () => {
  return (
    <VStack py={5} spacing={4} flex="1" bg="blue.pbg">
      <Text>Live Streaming Chat</Text>
      <VStack
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#794192',
            borderRadius: '24px',
          },
        }}
        spacing={4}
        px={8}
        overflowY="scroll"
        h="80vh"
      >
        <Message src="https://bit.ly/code-beast" name="JohanRomero" />
        <Message src="https://bit.ly/sage-adebayo" name="Hillary.Pacocha" />
        <Message
          src="https://bit.ly/kent-c-dodds"
          name="Laron_Hagenes"
          bgColor="purple.light"
          hcolor="white"
        />
        <Message name="Angela.Hackett" />
        <StreamerMessage name="Angela.Hackett" />
      </VStack>
      <VStack pos="relative" width="100%" px={8}>
        <HStack right={10} top={4} zIndex="1" pos="absolute">
          <Image boxSize="25px" mx="auto" src={utoosCoin} alt="utoos" />
          <Image boxSize="25px" mx="auto" src={emoji} alt="utoos" />
        </HStack>
        <Textarea
          borderRadius="lg"
          bg="blue.sbg"
          variant="filled"
          placeholder="Please ENTER to send message"
          size="sm"
          resize="none"
        />
      </VStack>
      {/* <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<PhoneIcon />}
      /> */}

      <Flex w="100%" px={8}>
        <Spacer />
        <Btn text="Send" />
      </Flex>
    </VStack>
  );
};

export default Chat;
