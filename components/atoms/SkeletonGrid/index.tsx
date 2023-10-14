import { SimpleGrid, SimpleGridProps, Skeleton } from '@chakra-ui/react';

interface SkeletonGridProps extends SimpleGridProps {
  count: number;
}

export const SkeletonGrid = ({ height = '200px', count = 8, ...rest }: SkeletonGridProps) => (
  <SimpleGrid w="full" {...rest}>
    {Array(count)
      .fill(0)
      .map((_, index) => (
        <Skeleton key={index} height={height} />
      ))}
  </SimpleGrid>
);
