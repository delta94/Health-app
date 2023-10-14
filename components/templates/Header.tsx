'use client';

import { MENU_ITEMS, SUB_MENU_ITEMS } from '@/const';

// components
import { Logo } from '@/components/atoms/Logo';
import { MenuList } from '@/components/organisms/MenuList';
import { SubMenu } from '@/components/organisms/SubMenu';
import { Box, Container, Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();

  const updatedMenuItems = MENU_ITEMS.map(item => ({
    ...item,
    isActive: item.url === pathname,
  }));

  const updatedSubMenuItems = SUB_MENU_ITEMS.map(item => ({
    ...item,
    isActive: item.url === pathname,
  }));
  return (
    <Box fontFamily="hira" as="header" bg="dark.600" p={[2, 2, 4]}>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Logo />
          <Flex>
            <MenuList items={updatedMenuItems} />
            <SubMenu items={updatedSubMenuItems} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
