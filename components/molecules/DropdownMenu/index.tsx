import { MenuItemProps } from '@/types';
import { Link, ListItem, UnorderedList } from '@chakra-ui/react';

export function DropDownMenu({ items }: { items: MenuItemProps[] }) {
  return (
    <UnorderedList
      position="absolute"
      top="100%"
      right={0}
      mt={2}
      w="280px"
      bg="gray.400"
      zIndex={21}
      boxShadow="lg"
      listStyleType="none"
    >
      {items.map((item, index) => (
        <Link href={item.url} key={`${item.label}-${index}`} _hover={{ textDecor: 'none' }}>
          <ListItem
            _hover={{ color: 'primary.400' }}
            fontFamily="hira"
            fontSize="18px"
            color={item.isActive ? 'primary.400' : 'white'}
            borderBottom="1px solid rgba(255,255,255,0.15)"
            px={8}
            py={6}
          >
            {item.label}
          </ListItem>
        </Link>
      ))}
    </UnorderedList>
  );
}
