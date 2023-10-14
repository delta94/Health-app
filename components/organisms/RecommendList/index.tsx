import { RecommendedItem } from '@/components/molecules/RecommendedItem';
import { RecommendProps } from '@/types';
import { GridItem, SimpleGrid } from '@chakra-ui/react';

export const RecommendList = ({ items }: { items: RecommendProps[] }) => {
  return (
    <SimpleGrid mt={4} columns={[1, 2, 2, 4, 4]} gap={2} rowGap={4} fontFamily="body">
      {items.map((recommend, index) => (
        <GridItem key={`${recommend.id}-${index}-${recommend.title}`}>
          <RecommendedItem {...recommend}></RecommendedItem>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
