import { getMealBadgeContent } from '@/helpers';
import { MealItemProps } from '@/types';
import { Badge, Box, Image } from '@chakra-ui/react';
import { useMemo } from 'react';

export const MealItem = ({ date, image, label }: MealItemProps) => {
  const mealTagContent = useMemo(() => getMealBadgeContent(date, label), [label, date]);

  return (
    <Box position="relative">
      <Image alt={label} src={image} />
      <Badge textTransform="capitalize" position="absolute" left="0" bottom="0">
        {mealTagContent}
      </Badge>
    </Box>
  );
};
