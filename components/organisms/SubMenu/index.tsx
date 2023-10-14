import { useState } from 'react';

import { CrossIcon, HamburgerMenuIcon } from '@/components/atoms/Icon';
import { MenuItemProps } from '@/types';
import { IconButton, List } from '@chakra-ui/react';
import { DropDownMenu } from '@/components/molecules/DropdownMenu';

export function SubMenu({ items }: { items: MenuItemProps[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const MenuIcon = isOpen ? CrossIcon : HamburgerMenuIcon;

  return (
    <List position="relative" ml={6}>
      <IconButton
        w={['16px', '16px', 'auto']}
        _hover={{ background: 'transparent' }}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        icon={<MenuIcon />}
        variant="ghost"
        onClick={handleToggle}
      />
      {isOpen && <DropDownMenu items={items} />}
    </List>
  );
}
