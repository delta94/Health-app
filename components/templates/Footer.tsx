import { Box, Center, Container, Flex, List, ListItem } from '@chakra-ui/react';

const items = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
];

const Footer = () => {
  return (
    <Box as="footer" fontFamily="hira" fontSize="xs" color="white" bg="dark.500" py={14}>
      <Container maxW="container.xl">
        <List>
          {items.map((text, idx) => (
            <ListItem tabIndex={0} as="span" key={idx} display="inline" ml={idx !== 0 ? 12 : 0}>
              {text}
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Footer;
