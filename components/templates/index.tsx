import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollButton from '../atoms/ScrollButton';
import { Box } from '@chakra-ui/react';

interface MainLayoutProps {}

function MainLayout({ children }: PropsWithChildren<MainLayoutProps>) {
  return (
    <Box pos="relative">
      <Header />
      {children}
      <Footer />
      <ScrollButton />
    </Box>
  );
}

export default MainLayout;
