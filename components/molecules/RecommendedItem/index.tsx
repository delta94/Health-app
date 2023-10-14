import { getRecommendBadgeContent } from '@/helpers';
import { RecommendProps } from '@/types';
import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react';
import { useMemo } from 'react';

export const RecommendedItem = ({ date, time, image, title, tags }: RecommendProps) => {
  const recommendTagContent = useMemo(() => getRecommendBadgeContent(date, time), [time, date]);

  return (
    <Box>
      <Box position="relative">
        <Image alt={title} src={image} />
        <Badge textTransform="capitalize" position="absolute" left="0" bottom="0">
          {recommendTagContent}
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
