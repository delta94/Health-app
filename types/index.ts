import { ChartData } from 'chart.js';
import { ReactElement } from 'react';

export interface MenuItemProps {
  icon?: ReactElement;
  label: string;
  url: string;
  isActive: boolean;
}

export type PaginableData<T> = {
  data: T[];
  first?: boolean;
  last?: boolean;
  pageSize: number;
  totalPage: number;
  totalRecords: number;
  page: number;
};

export interface ExerciseProps {
  data: Exercise[];
  date: string;
}

export interface Exercise {
  id?: number;
  description: string;
  timeSpent: string;
  caloriesBurned: string;
}

export interface Diary {
  id?: number;
  description: string;
  date: string;
  time: string;
}

export const enum MealTimes {
  Morning = 'Morning',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Snack = 'Snack',
}

export type MealTime = 'morning' | 'lunch' | 'dinner' | 'snack' | 'all';
export interface MealItemProps {
  id?: number;
  date: string;
  image: string;
  label: MealTimes;
}

export type Category = 'column' | 'diet' | 'beauty' | 'health';

export interface RecommendProps {
  id?: number;
  date: string;
  time: string;
  image: string;
  title: string;
  tags: string[];
}

export interface LineChartData extends ChartData<'line', number[], string> {}

export interface ICategoryItem {
  description: string;
  label: string;
  type: Category;
}
export interface CategoryItemProps {
  items: ICategoryItem[];
  onClick: (type: Category | string) => void;
}
