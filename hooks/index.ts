import { setupClientMocks, setupServerMocks } from '@/__mocks__/setup';
import { isTrue } from '@/helpers';
import { useEffect, useState } from 'react';

const mockServiceEnabled = isTrue(process.env.NEXT_PUBLIC_ENABLE_MOCK_SERVICE);
let mockServiceStarted = false;

if (mockServiceEnabled) {
  setupServerMocks();
}

export function useMockService() {
  const [shouldRender, setShouldRender] = useState(!mockServiceEnabled);

  useEffect(() => {
    if (mockServiceEnabled) {
      mockServiceStarted = true;
      setupClientMocks().then(() => {
        setShouldRender(true);
      });
    }
  }, []);

  return shouldRender;
}
