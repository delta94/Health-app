import { MenuItem } from '@/components/molecules/MenuItem';
import { MenuItemProps } from '@/types';
import { UnorderedList } from '@chakra-ui/react';

export function MenuList({ items }: { items: MenuItemProps[] }) {
  return (
    <UnorderedList color="white" display="flex" alignItems="center" listStyleType="none">
      {items.map(item => (
        <MenuItem {...item} key={item.label} />
      ))}
    </UnorderedList>
  );
}
