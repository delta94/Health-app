import FilterButton from '@/components/atoms/FilterButton';
import { FILTER_ITEMS } from '@/const/filter';
import { Flex } from '@chakra-ui/react';

export function FilterList({ onFilter }: any) {
  return (
    <Flex mb={14} color="white" gap={20} alignItems="center">
      {FILTER_ITEMS.map((item, index) => (
        <FilterButton onClick={onFilter} {...item} key={`${item.label}-${index}`} />
      ))}
    </Flex>
  );
}
