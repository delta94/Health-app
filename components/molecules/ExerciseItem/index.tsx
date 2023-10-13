import { Exercise } from '@/types';
import { Box, Flex, Text } from '@chakra-ui/react';

export const ExerciseItem = ({ description, timeSpent, caloriesBurned }: Exercise) => {
  return (
    <Box pt={2} pr={3} borderBottom="1px" borderColor="gray.400">
      <Flex alignItems="center">
        <Text color="white" fontSize="5px">
          ●
        </Text>
        <Text color="white" fontFamily="hira" ml={3} isTruncated maxWidth="60%" fontSize="15px" lineHeight="22px">
          {description}
        </Text>
        <Text fontFamily="inter" ml="auto" color="primary.300" fontSize="18px" lineHeight="22px">
          {timeSpent}
        </Text>
      </Flex>
      <Text fontSize="15px" fontFamily="inter" lineHeight="18px" color="primary.300" ml={4} mt={0} mb={2}>
        {caloriesBurned}
      </Text>
    </Box>
  );
};
