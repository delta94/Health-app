import { getMealBadgeContent } from '@/helpers';
import { MealItemProps } from '@/types';
import { Badge, Box, Image } from '@chakra-ui/react';
import { useMemo } from 'react';

export const MealItem = ({ date, image, label }: MealItemProps) => {
  const mealTagContent = useMemo(() => getMealBadgeContent(date, label), [label, date]);

  return (
    <Box position="relative">
      <Image alt={label} src={image} />
      <Badge
        fontSize="15px"
        fontFamily="inter"
        px={2}
        py={1}
        maxW="120px"
        w="full"
        color="white"
        background="primary.300"
        textTransform="capitalize"
        position="absolute"
        left="0"
        bottom="0"
      >
        {mealTagContent}
      </Badge>
    </Box>
  );
};
