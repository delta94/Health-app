import { Diary } from '@/types';
import { Box, Flex, Text } from '@chakra-ui/react';

const DiaryItem = ({ description, date, time }: Diary) => {
  return (
    <Box p={4} color="dark.500" border="2px solid" borderColor="gray.400">
      <Flex fontFamily="inter" fontSize="18px" flexDir="column">
        <Text>{date}</Text>
        <Text>{time}</Text>
      </Flex>
      <Text mt={2} fontFamily="hira" fontSize="12px" noOfLines={5}>
        {description}
      </Text>
    </Box>
  );
};

export default DiaryItem;
