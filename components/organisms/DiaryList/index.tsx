import DiaryItem from '@/components/molecules/DiaryItem';
import { Diary } from '@/types';
import { SimpleGrid, Text } from '@chakra-ui/react';

export const DiaryList = ({ items, id }: { items: Diary[]; id: string }) => {
  return (
    <SimpleGrid id={id} mt={2} columns={[1, 2, 2, 4, 4]} gap={3} fontFamily="body">
      {items.map((diary, index) => (
        <DiaryItem key={`${diary.id}-${index}`} {...diary}></DiaryItem>
      ))}
    </SimpleGrid>
  );
};
