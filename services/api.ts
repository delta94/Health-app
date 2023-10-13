import { Diary, ExerciseProps, LineChartData, MealItemProps, PaginableData } from '@/types';
import axios from 'axios';

const baseUrlV1 = `/api`;

export namespace MealsApi {
  export const getMeals = async ({ pageParam = 1, mealTime = 'all' }) => {
    const response = await axios.get<PaginableData<MealItemProps>>(
      `${baseUrlV1}/meals?page=${pageParam}&type=${mealTime}`
    );

    return response.data;
  };

  export const getExercises = async () => {
    const response = await axios.get<ExerciseProps>(`${baseUrlV1}/excercises`);

    return response.data;
  };

  export const getChartData = async (timeRange: string) => {
    const response = await axios.get<LineChartData>(`${baseUrlV1}/chartData/${timeRange}`);

    return response.data;
  };

  export const getDiary = async ({ pageParam = 1 }) => {
    const response = await axios.get<PaginableData<Diary>>(`${baseUrlV1}/diary?page=${pageParam}`);

    return response.data;
  };
}
