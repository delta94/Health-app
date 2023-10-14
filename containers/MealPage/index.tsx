'use client';
import { Chart, registerables } from 'chart.js';

import LineChart from '@/components/atoms/LineChart';
import { SkeletonGrid } from '@/components/atoms/SkeletonGrid';
import { FilterList } from '@/components/molecules/FilterList';
import { MealList } from '@/components/organisms/MealList';
import ProgressSection from '@/components/organisms/ProgressSection';
import { chartData } from '@/const';
import { useGetMeals } from '@/services';
import { MealTime } from '@/types';
import { Box, Button, Center, Container, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useMeasure } from 'react-use';

Chart.register(...registerables);

export default function MealPage() {
  const [page, setPage] = useState(1);
  const [mealTimeFilter, setMealTimeFilter] = useState<MealTime>('all');

  const { data: mealsData, fetchNextPage, hasNextPage, refetch, isFetchingNextPage } = useGetMeals(mealTimeFilter);
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const handleLoadMore = () => {
    setPage(page + 1);
    fetchNextPage({ pageParam: page + 1 });
  };

  const handleFilterClick = (mealType: MealTime) => {
    setMealTimeFilter(mealType);
  };

  useEffect(() => {
    refetch();
  }, [mealTimeFilter, refetch]);

  return (
    <>
      <SimpleGrid h={['100%', '100%', 312]} columns={[1, 1, 2]}>
        <ProgressSection />
        <Box bg="dark.600">
          <LineChart ref={ref} height={300} data={chartData} width={width} />
        </Box>
      </SimpleGrid>

      <Container mt={6} mb={14} display="flex" flexDir="column" alignItems="center" maxW="container.lg">
        <FilterList onFilter={handleFilterClick} />

        {mealsData ? (
          mealsData.pages.map((page, pageIndex) => <MealList key={page.data[pageIndex].id} items={page.data} />)
        ) : (
          <SkeletonGrid columns={[1, 2, 2, 4, 4]} count={8} mt={2} gap={2} />
        )}

        {isFetchingNextPage && <SkeletonGrid columns={[1, 2, 2, 4, 4]} count={8} mt={2} gap={2} />}

        {hasNextPage && (
          <Button color="white" w="296px" variant="unstyled" mt={7} onClick={handleLoadMore}>
            <Center w="100%" h="100%" bgGradient="linear(to-l, primary.500, primary.300)" flexDirection="column">
              記録をもっと見る
            </Center>
          </Button>
        )}
      </Container>
    </>
  );
}
