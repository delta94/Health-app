'use client';

import MainLayout from '@/components/templates';
import { setupReactQuery } from '@/config/react-query-config';
import { useMockService } from '@/hooks';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { theme } from './theme';

export default function RootStyleRegistry({ children }: React.PropsWithChildren<{}>) {
  const shouldRender = useMockService();
  const [queryClient] = useState(setupReactQuery);

  if (!shouldRender) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <MainLayout>{children}</MainLayout>
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
