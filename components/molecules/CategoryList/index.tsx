import CategoryItem from '@/components/atoms/CategoryItem';
import { CategoryItemProps } from '@/types';
import { GridItem, SimpleGrid } from '@chakra-ui/react';

export const CategoryList = ({ items, onClick }: CategoryItemProps) => {
  return (
    <SimpleGrid w="full" columns={[1, 2, 2, 4, 4]} gap={5}>
      {items.map(({ description, type, label }) => (
        <GridItem key={type}>
          <CategoryItem onClick={() => onClick?.(type)} type={type} label={label} description={description} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
