import { MenuItemProps } from '@/types';
import { Box, Link, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';

export function MenuItem({ icon, label, url }: MenuItemProps) {
  return (
    <Link as={NextLink} href={url} _hover={{ textDecoration: 'none', color: 'primary.400' }} textDecor="none">
      <ListItem display="flex" alignItems="center" ml={6}>
        {icon}
        <Box ml={2}>{label}</Box>
      </ListItem>
    </Link>
  );
}
