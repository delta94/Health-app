'use client';

import { MENU_ITEMS, SUB_MENU_ITEMS } from '@/const';

// components
import { Logo } from '@/components/atoms/Logo';
import { MenuList } from '@/components/organisms/MenuList';
import { SubMenu } from '@/components/organisms/SubMenu';
import { Box, Container, Flex } from '@chakra-ui/react';

function Header() {
  return (
    <Box fontFamily="hira" as="header" bg="dark.600" p={4}>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Logo />
          <Flex>
            <MenuList items={MENU_ITEMS} />
            <SubMenu items={SUB_MENU_ITEMS} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
