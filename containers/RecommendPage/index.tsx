'use client';

import { SkeletonGrid } from '@/components/atoms/SkeletonGrid';
import { CategoryList } from '@/components/molecules/CategoryList';
import { RecommendList } from '@/components/organisms/RecommendList';
import { categories } from '@/const/filter';
import { useGetRecommend } from '@/services';
import { Category } from '@/types';
import { Button, Center, Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function RecommendPage() {
  const [page, setPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState<Category | string>('column');

  const {
    data: recommendData,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetchingNextPage,
  } = useGetRecommend(categoryFilter);
  const handleLoadMore = () => {
    setPage(page + 1);
    fetchNextPage({ pageParam: page + 1 });
  };

  const handleFilterClick = (type: Category | string) => {
    setCategoryFilter(type);
  };

  useEffect(() => {
    refetch();
  }, [categoryFilter, refetch]);

  return (
    <>
      <Container my={14} display="flex" flexDir="column" alignItems="center" maxW="container.lg">
        <CategoryList items={categories} onClick={handleFilterClick} />

        {recommendData ? (
          recommendData.pages.map((page, pageIndex) => (
            <RecommendList key={page.data[pageIndex].id} items={page.data} />
          ))
        ) : (
          <SkeletonGrid height="252px" columns={[1, 2, 2, 4, 4]} count={8} mt={4} gap={2} rowGap={4} />
        )}

        {isFetchingNextPage && (
          <SkeletonGrid height="252px" columns={[1, 2, 2, 4, 4]} count={8} mt={4} gap={2} rowGap={4} />
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
