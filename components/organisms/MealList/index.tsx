import { MealItem } from '@/components/molecules/MealItem';
import { MealItemProps } from '@/types';
import { GridItem, SimpleGrid } from '@chakra-ui/react';

export const MealList = ({ items }: { items: MealItemProps[] }) => {
  return (
    <SimpleGrid mt={2} columns={[1, 2, 2, 4, 4]} gap={2} fontFamily="body">
      {items.map((meal, index) => (
        <GridItem key={`${meal.id}-${index}-${meal.label}`}>
          <MealItem {...meal}></MealItem>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
