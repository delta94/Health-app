import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {}

function MainLayout({ children }: PropsWithChildren<MainLayoutProps>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
