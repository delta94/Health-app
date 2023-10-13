'use client';

import { setupClientMocks, setupServerMocks } from '@/__mocks__/setup';
import MainLayout from '@/components/templates';
import { setupReactQuery } from '@/config/react-query-config';
import { isTrue } from '@/helpers';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useEffect, useState } from 'react';
import { theme } from './theme';

const mockServiceEnabled = isTrue(process.env.NEXT_PUBLIC_ENABLE_MOCK_SERVICE);
let mockServiceStarted = false;

if (mockServiceEnabled) {
  setupServerMocks();
}

export default function RootStyleRegistry({ children }: PropsWithChildren<{}>) {
  const [shouldRender, setShouldRender] = useState(!mockServiceEnabled);
  const [queryClient] = useState(setupReactQuery);

  useEffect(() => {
    if (mockServiceEnabled && !mockServiceStarted) {
      mockServiceStarted = true;
      setupClientMocks().then(_ => {
        setShouldRender(true);
      });
    }
  }, []);

  if (!shouldRender) {
    return null;
  }

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
