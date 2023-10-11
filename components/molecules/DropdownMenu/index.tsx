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
      boxShadow="lg"
      listStyleType="none"
    >
      {items.map(item => (
        <Link href={item.url} key={item.label} _hover={{ textDecor: 'none' }}>
          <ListItem _notLast={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }} px={8} py={6}>
            {item.label}
          </ListItem>
        </Link>
      ))}
    </UnorderedList>
  );
}
