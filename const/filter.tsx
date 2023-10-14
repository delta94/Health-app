import { CupIcon, CutleryIcon } from '@/components/atoms/Icon';
import { ICategoryItem } from '@/types';

export const FILTER_ITEMS = [
  { icon: <CutleryIcon />, label: 'Morning', type: 'morning' },
  { icon: <CutleryIcon />, label: 'Lunch', type: 'lunch' },
  { icon: <CutleryIcon />, label: 'Dinner', type: 'dinner' },
  { icon: <CupIcon />, label: 'Snack', type: 'snack' },
];

export const categories: ICategoryItem[] = [
  {
    type: 'column',
    label: 'RECOMMENDED COLUMN',
    description: 'オススメ',
  },
  {
    type: 'diet',
    label: 'RECOMMENDED DIET',
    description: 'ダイエット',
  },
  {
    type: 'beauty',
    label: 'RECOMMENDED BEAUTY',
    description: '美容',
  },
  {
    type: 'health',
    label: 'RECOMMENDED HEALTH',
    description: '健康',
  },
];
