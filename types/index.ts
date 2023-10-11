import { ReactElement } from 'react';

export interface MenuItemProps {
  icon?: ReactElement;
  label: string;
  url: string;
}

export type PaginableData<T> = {
  data: T[];
  first?: boolean;
  last?: boolean;
  pageSize: number;
  totalPage: number;
  totalRecords: number;
};

export interface Exercise {
  id: number;
  description: string;
  timeSpent: string;
  caloriesBurned: string;
}
