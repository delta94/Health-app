import { InformationIcon, MedalIcon, NotificationIcon } from '@/components/atoms/Icon';

export const MENU_ITEMS = [
  { icon: <InformationIcon />, label: '自分の記録', url: '/record', isActive: false },
  { icon: <MedalIcon />, label: 'チャレンジ', url: '#', isActive: false },
  { icon: <NotificationIcon count={3} />, label: 'お知らせ', url: '#', isActive: false },
];

export const SUB_MENU_ITEMS = [
  { label: '自分の記録', url: '/record', isActive: false },
  { label: '体重グラフ', url: '#', isActive: false },
  { label: '目標', url: '#', isActive: false },
  { label: '選択中のコース', url: '#', isActive: false },
  { label: 'コラム一覧', url: '/recommend', isActive: false },
  { label: '設定', url: '#', isActive: false },
];
