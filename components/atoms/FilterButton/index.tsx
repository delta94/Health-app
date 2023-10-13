import { MealTime } from '@/types';
import { Button, ButtonProps, Center, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface FilterButtonProps extends Omit<ButtonProps, 'onClick' | 'type'> {
  icon: ReactNode;
  label: string;
  onClick: (type: MealTime | string) => void;
  type: MealTime | string;
}

const FilterButton = ({ icon, label, onClick, type, ...props }: FilterButtonProps) => {
  return (
    <Button
      variant="unstyled"
      p={0}
      w="116px"
      h="134px"
      background="transparent"
      onClick={() => onClick(type)}
      {...props}
    >
      <Center
        w="100%"
        h="100%"
        bgGradient="linear(to-l, primary.500, primary.300)"
        clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
        flexDirection="column"
      >
        {icon}
        <Text color="white" fontWeight="normal" fontFamily="inter" fontSize="20px" lineHeight="24px">
          {label}
        </Text>
      </Center>
    </Button>
  );
};

export default FilterButton;
