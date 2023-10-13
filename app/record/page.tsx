'use client';
import { Chart, registerables } from 'chart.js';

import RecordPage from '@/containers/RecordPage';

Chart.register(...registerables);

export default function Page() {
  return (
    <>
      <RecordPage />
    </>
  );
}
