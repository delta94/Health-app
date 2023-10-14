import { RecommendProps } from '@/types';
import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react';

export const RecommendedItem = ({ date, time, image, title, tags }: RecommendProps) => {
  return (
    <Box>
      <Box position="relative">
        <Image alt={title} src={image} />
        <Badge
          fontSize="15px"
          fontFamily="inter"
          px={2}
          py={1}
          maxW="141px"
          w="full"
          textTransform="capitalize"
          position="absolute"
          left="0"
          bottom="0"
          display="flex"
          gap={3}
          color="white"
          background="primary.300"
        >
          <Text>{date}</Text>
          <Text>{time}</Text>
        </Badge>
      </Box>

      <Text mt={2} noOfLines={2} fontFamily="hira" fontSize="15px">
        {title}
      </Text>

      {tags && (
        <Flex gap={2}>
          {tags.map((tag, index) => (
            <Text letterSpacing={0.06} key={index} fontFamily="hira" fontSize="12px" color="primary.400">
              {tag}
            </Text>
          ))}
        </Flex>
      )}
    </Box>
  );
};
