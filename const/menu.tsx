import { InformationIcon, MedalIcon, NotificationIcon } from '@/components/atoms/Icon';

export const MENU_ITEMS = [
  { icon: <InformationIcon />, label: '自分の記録', url: '/' },
  { icon: <MedalIcon />, label: 'チャレンジ', url: '/' },
  { icon: <NotificationIcon count={3} />, label: 'お知らせ', url: '/' },
];

export const SUB_MENU_ITEMS = [
  { label: '自分の記録', url: '/' },
  { label: '体重グラフ', url: '/' },
  { label: '目標', url: '/' },
  { label: '選択中のコース', url: '/' },
  { label: 'コラム一覧', url: '/' },
  { label: '設定', url: '/' },
];
