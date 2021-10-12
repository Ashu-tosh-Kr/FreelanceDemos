import { Avatar, AvatarGroup } from '@chakra-ui/avatar';
import { Image } from '@chakra-ui/image';
import { Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import Btn from 'components/util/Btn';

import coins from 'assets/donations/coins.svg';
import itm120 from 'assets/donations/120.svg';
import itm600 from 'assets/donations/600.svg';
import itm1200 from 'assets/donations/1200.svg';
import itm2600 from 'assets/donations/2600.svg';
import itm6500 from 'assets/donations/6500.svg';
import itm13500 from 'assets/donations/13500.svg';
import itm25500 from 'assets/donations/25500.svg';
import itm55000 from 'assets/donations/55000.svg';
import itm99000 from 'assets/donations/99000.svg';

const DonationCard = ({ children }) => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      p={2}
      borderRadius="md"
      bgColor="blue.fg"
    >
      {children}
    </Flex>
  );
};

const DonationPanel = () => {
  return (
    <VStack w="25%" bg="blue.sbg" py={5}>
      <HStack>
        <Image src={coins} alt="coins" />
        <AvatarGroup max={5}>
          <Avatar
            // size="md"
            h={10}
            w={10}
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
          <Avatar
            size="md"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />
          <Avatar
            name="Kent Dodds"
            h={16}
            w={16}
            src="https://bit.ly/kent-c-dodds"
          />
          <Avatar
            h="4.5rem"
            w="4.5rem"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
          />
          <Avatar
            h={20}
            w={20}
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
        </AvatarGroup>
      </HStack>
      <Btn text="BID MEGA CHAT" bgColor="blue.pbg" w="13em" p={5} />
      <SimpleGrid p="1rem" columns={3} spacing={3}>
        <DonationCard>
          <Image src={itm120} boxSize="4rem" alt="itm120" />
          <HStack mt={2} spacing={0}>
            <Image src={coins} boxSize="1.25rem" alt="coins" />
            <Text textStyle="info">120 UTOOS</Text>
          </HStack>
        </DonationCard>
        <DonationCard>
          <Image src={itm600} boxSize="4rem" alt="itm600" />
          <HStack mt={2} spacing={0}>
            <Image src={coins} boxSize="1.25rem" alt="coins" />
            <Text textStyle="info">600 UTOOS</Text>
          </HStack>
        </DonationCard>
        <DonationCard>
          <Image src={itm1200} alt="itm1200" />
          <HStack mt={2} spacing={0}>
            <Image src={coins} boxSize="1.25rem" alt="coins" />
            <Text textStyle="info">1200 UTOOS</Text>
          </HStack>
        </DonationCard>
        <DonationCard>
          <Image src={itm2600} boxSize="4rem" alt="itm120" />
          <HStack mt={2} spacing={0}>
            <Image src={coins} boxSize="1.25rem" alt="coins" />
            <Text textStyle="info">2600 UTOOS</Text>
          </HStack>
        </DonationCard>
        <DonationCard>
          <Image src={itm6500} boxSize="4rem" alt="itm600" />
          <HStack mt={2} spacing={0}>
            <Image src={coins} boxSize="1.25rem" alt="coins" />
            <Text textStyle="info">6500 UTOOS</Text>
          </HStack>
        </DonationCard>
        <DonationCard>
          <Image src={itm13500} boxSize="4rem" alt="itm1200" />
          <HStack mt={2} spacing={0}>
            <Image src={coins} boxSize="1.25rem" alt="coins" />
            <Text textStyle="info">13500 UTOOS</Text>
          </HStack>
        </DonationCard>
        <DonationCard>
          <Image src={itm25500} boxSize="4rem" alt="itm120" />
          <HStack mt={2} spacing={0}>
            <Image src={coins} boxSize="1.2rem" alt="coins" />
            <Text textStyle="info">25500 UTOOS</Text>
          </HStack>
        </DonationCard>
        <DonationCard>
          <Image src={itm55000} boxSize="4rem" alt="itm600" />
          <HStack mt={2} spacing={0}>
            <Image src={coins} boxSize="1.25rem" alt="coins" />
            <Text textStyle="info">55000 UTOOS</Text>
          </HStack>
        </DonationCard>
        <DonationCard>
          <Image src={itm99000} boxSize="4rem" alt="itm1200" />
          <HStack mt={2} spacing={0}>
            <Image src={coins} boxSize="1.25rem" alt="coins" />
            <Text textStyle="info">99000 UTOOS</Text>
          </HStack>
        </DonationCard>
      </SimpleGrid>
    </VStack>
  );
};

export default DonationPanel;
