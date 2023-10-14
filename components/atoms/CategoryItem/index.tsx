import { ICategoryItem } from '@/types';
import { Button, Divider, Text } from '@chakra-ui/react';

export const CategoryItem = ({ description, label, onClick }: ICategoryItem & { onClick: () => void }) => {
  return (
    <Button
      display="flex"
      flexDir="column"
      fontFamily="inter"
      w="full"
      h="auto"
      py={6}
      variant="unstyled"
      bg="dark.600"
      onClick={onClick}
      borderRadius="none"
    >
      <Text
        whiteSpace="normal"
        fontWeight="400"
        maxW="200px"
        lineHeight="28px"
        color="primary.300"
        fontSize="22px"
        className="font-body text-primary-300"
      >
        {label}
      </Text>
      <Divider maxW="56px" my={2} />
      <Text fontFamily="hira" color="white">
        {description}
      </Text>
    </Button>
  );
};

export default CategoryItem;
