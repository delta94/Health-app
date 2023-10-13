'use client';
import { Chart, registerables } from 'chart.js';

import LineChart from '@/components/atoms/LineChart';
import { FilterList } from '@/components/molecules/FilterList';
import { MealList } from '@/components/organisms/MealList';
import ProgressSection from '@/components/organisms/ProgressSection';
import { useGetMeals } from '@/services';
import { MealTime } from '@/types';
import { Box, Button, Center, Container, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useMeasure } from 'react-use';

Chart.register(...registerables);

const data = {
  labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3, 7, 5, 6, 7, 8, 9],
      borderColor: 'cyan',
      backgroundColor: 'transparent',
      pointBackgroundColor: 'cyan',
      pointBorderColor: 'cyan',
    },
    {
      label: 'Dataset 2',
      data: [2, 29, 5, 5, 12, 13, 10, 15, 16, 17, 18, 19],
      borderColor: 'orange',
      backgroundColor: 'transparent',
      pointBackgroundColor: 'orange',
      pointBorderColor: 'orange',
    },
  ],
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [mealTimeFilter, setMealTimeFilter] = useState<MealTime>('all');

  const {
    data: mealsData,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetchingNextPage,
    isLoading,
  } = useGetMeals(mealTimeFilter);

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
          <LineChart ref={ref} height={300} data={data} width={width} />
        </Box>
      </SimpleGrid>

      <Container mt={6} display="flex" flexDir="column" alignItems="center" maxW="container.lg">
        <FilterList onFilter={handleFilterClick} />
        {mealsData ? (
          mealsData.pages.map((page, pageIndex) => <MealList key={page.data[pageIndex].id} items={page.data} />)
        ) : (
          <SimpleGrid mt={2} w="full" columns={[1, 2, 2, 4, 4]} gap={2} fontFamily="body">
            {Array(8)
              .fill(0)
              .map(index => (
                <Skeleton key={index} height="200px" />
              ))}
          </SimpleGrid>
        )}

        {isFetchingNextPage && (
          <SimpleGrid mt={2} w="full" columns={[1, 2, 2, 4, 4]} gap={2} fontFamily="body">
            {Array(8)
              .fill(0)
              .map(index => (
                <Skeleton key={index} height="200px" />
              ))}
          </SimpleGrid>
        )}

        {hasNextPage && (
          <Button w="296px" variant="unstyled" mt={7} onClick={handleLoadMore}>
            <Center w="100%" h="100%" bgGradient="linear(to-l, primary.500, primary.300)" flexDirection="column">
              記録をもっと見る
            </Center>
          </Button>
        )}
      </Container>
    </>
  );
}
