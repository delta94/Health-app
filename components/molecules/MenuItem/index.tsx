import { MenuItemProps } from '@/types';
import { Box, Link, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';

export function MenuItem({ icon, label, url, isActive }: MenuItemProps) {
  return (
    <Link
      as={NextLink}
      href={url}
      color={isActive ? 'primary.400' : 'defaultColor'}
      _hover={{ textDecoration: 'none', color: 'primary.400' }}
      textDecor="none"
    >
      <ListItem display="flex" alignItems="center" ml={6}>
        {icon}
        <Box display={['none', 'none', 'block']} ml={2}>
          {label}
        </Box>
      </ListItem>
    </Link>
  );
}
