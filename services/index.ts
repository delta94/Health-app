import { MealTime } from '@/types';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { MealsApi } from './api';

export const QUERY_KEYS = {
  useGetMeals: () => ['mealApi.getMeals'],
  useGetExercise: () => ['mealApi.getExercises'],
  useGetDiary: () => ['mealApi.getDiary'],
  useGetChartData: () => ['mealApi.getChartData'],
};

const timeOptions = { cacheTime: 120000, staleTime: 0 };

export const useGetMeals = (mealTime: MealTime) => {
  return useInfiniteQuery(QUERY_KEYS.useGetMeals(), ({ pageParam = 1 }) => MealsApi.getMeals({ pageParam, mealTime }), {
    ...timeOptions,
    keepPreviousData: true,
    getNextPageParam: lastPage => {
      return lastPage.last ? null : lastPage.page + 1;
    },
  });
};

export const useGetExercise = () => {
  return useQuery(QUERY_KEYS.useGetExercise(), () => MealsApi.getExercises(), {
    ...timeOptions,
  });
};

export const useGetChartData = (timeRange: string) => {
  return useQuery(QUERY_KEYS.useGetChartData(), () => MealsApi.getChartData(timeRange), {
    ...timeOptions,
  });
};

export const useGetDiary = () => {
  return useInfiniteQuery(QUERY_KEYS.useGetDiary(), ({ pageParam = 1 }) => MealsApi.getDiary({ pageParam }), {
    ...timeOptions,
    keepPreviousData: true,
    getNextPageParam: lastPage => {
      return lastPage.last ? null : lastPage.page + 1;
    },
  });
};
