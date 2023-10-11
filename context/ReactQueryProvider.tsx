'use client';

import { setupAxios } from '@/config/axios-config';
import { setupReactQuery } from '@/config/react-query-config';
import { isTrue } from '@/helpers';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useEffect, useState } from 'react';

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [queryClient] = useState(setupReactQuery);

  useEffect(() => {
    setupAxios();
    setLoading(false);
  }, []);

  //make sure axios setup complete before render anything
  if (loading) return null;

  return (
    <QueryClientProvider client={queryClient}>
      {isTrue(process.env.NEXT_PUBLIC_ENABLE_REACT_QUERY_DEVTOOLS) && <ReactQueryDevtools />}
      {children}
    </QueryClientProvider>
  );
}
