import { ExerciseItem } from '@/components/molecules/ExerciseItem';
import { ExerciseProps } from '@/types';
import { Box, Flex, GridItem, SimpleGrid, Text, VStack } from '@chakra-ui/react';

export const ExerciseList = ({ items, id }: { items: ExerciseProps; id: string }) => {
  const { date, data } = items;
  return (
    <Box mb={14} id={id} bg="dark.600">
      <VStack overflowY="auto" align="stretch" px={6}>
        <Flex pt={4} alignItems="center" fontFamily="inter" color="white" pl={6}>
          <Text fontSize="15px" maxW="96px">
            MY EXERCISE
          </Text>
          <Text fontSize="22px">{date}</Text>
        </Flex>
        <SimpleGrid h="264px" overflowY="auto" pl={6} pr={8} pb={6} columns={[2]} gap={1}>
          {data.map((item, index) => (
            <GridItem key={index}>
              <ExerciseItem {...item} />
            </GridItem>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
