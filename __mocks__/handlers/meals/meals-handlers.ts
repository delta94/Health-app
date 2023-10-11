import _ from 'lodash';
import { rest } from 'msw';
import { meals } from './data/mealsData';
import { PaginableData } from '@/types';

interface Meal {
  id: number;
  date: string;
  image: string;
  label: string;
}

interface MealsData {
  morning: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  snack: Meal[];
}

export const mealsHandlers = [
  rest.get('/api/meals', (req, res, ctx) => {
    try {
      const type = req.url.searchParams.get('type') as keyof MealsData | null;

      const page = Number(req.url.searchParams.get('page') || 1);
      const pageSize = 5;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      const targetMeals = type ? meals[type] : Object.values(meals).flat();

      const paginatedData = targetMeals.slice(startIndex, endIndex);
      console.log({
        data: paginatedData,
        last: pageSize * (page + 1) >= targetMeals.length,
        totalPage: Math.ceil(targetMeals.length / pageSize),
        totalRecords: targetMeals.length,
      });
      return res(
        ctx.status(200),
        ctx.json({
          data: paginatedData,
          last: pageSize * (page + 1) >= targetMeals.length,
          totalPage: Math.ceil(targetMeals.length / pageSize),
          totalRecords: targetMeals.length,
        })
      );
    } catch (err) {
      return res(ctx.status(500), ctx.json({ errorMessage: 'An unexpected error occurred.' }));
    }
  }),

  rest.get('/api/meal-stats', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        date: '05/21',
        percentage: '75%',
      })
    );
  }),
];
