'use client';
import { Chart, registerables } from 'chart.js';

import LineChart from '@/components/atoms/LineChart';
import { DiaryList } from '@/components/organisms/DiaryList';
import { ExerciseList } from '@/components/organisms/ExerciseList';
import SectionNavigation from '@/components/organisms/SectionNavigation';
import { SECTION_IDS } from '@/const/meals';
import { useGetChartData, useGetDiary, useGetExercise } from '@/services';
import { Box, Button, Center, Container, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useMeasure } from 'react-use';

Chart.register(...registerables);

export default function RecordPage() {
  const [page, setPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState('年');
  const { data: diaryData, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetDiary();
  const { data: exercisesData } = useGetExercise();
  const { data: chartData, refetch } = useGetChartData(currentFilter);

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const handleLoadMore = () => {
    setPage(page + 1);
    fetchNextPage({ pageParam: page + 1 });
  };

  const handleGoToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterClick = useCallback((name: string) => {
    setCurrentFilter(name);
  }, []);

  useEffect(() => {
    refetch();
  }, [currentFilter, refetch]);

  return (
    <>
      <Container mt={14} mb={16} display="flex" flexDir="column" alignItems="center" maxW="container.lg">
        <SectionNavigation onGotoSection={handleGoToSection} />

        <Box id={SECTION_IDS.MyBodyRecord} px={6} py={4} my={14} bg="dark.600" w="full" h="314px">
          {chartData && (
            <LineChart
              ref={ref}
              width={width}
              height={210}
              data={chartData}
              header={{ title: 'BODY RECORD', dateTime: '2021.05.21' }}
              filters={[
                { id: 1, name: '日', isActive: currentFilter === '日' },
                { id: 2, name: '週', isActive: currentFilter === '週' },
                { id: 3, name: '月', isActive: currentFilter === '月' },
                { id: 4, name: '年', isActive: currentFilter === '年' },
              ]}
              onFiltersClick={handleFilterClick}
            ></LineChart>
          )}
        </Box>

        {exercisesData ? (
          <ExerciseList id={SECTION_IDS.MyExercise} items={exercisesData} />
        ) : (
          <Skeleton w="full" height="333px" />
        )}

        {diaryData ? (
          diaryData.pages.map((page, pageIndex) => (
            <DiaryList id={SECTION_IDS.MyDiary} key={page.data[pageIndex].id} items={page.data} />
          ))
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
