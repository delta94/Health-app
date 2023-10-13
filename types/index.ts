import { ChartData } from 'chart.js';
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

export interface LineChartData extends ChartData<'line', number[], string> {}
