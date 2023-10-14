import { LineChartData, MealItemProps, RecommendProps } from '@/types';
import { rest } from 'msw';
import { dataByTimeRange, diaryData, exerciseData, meals, recommend } from './data/mealsData';

interface MealsData {
  morning: MealItemProps[];
  lunch: MealItemProps[];
  dinner: MealItemProps[];
  snack: MealItemProps[];
}

interface RecommendData {
  column: RecommendProps[];
  diet: RecommendProps[];
  beauty: RecommendProps[];
  health: RecommendProps[];
}

type TimeRangeKey = '日' | '週' | '月' | '年';

export const mealsHandlers = [
  rest.get('/api/meals', (req, res, ctx) => {
    try {
      const type = req.url.searchParams.get('type') as keyof MealsData | 'all';
      const pageParam = Number(req.url.searchParams.get('page') || 1);
      const pageSize = 8;
      const startIndex = (pageParam - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      const targetMeals = type !== 'all' ? meals[type] : Object.values(meals).flat();

      const paginatedData = targetMeals.slice(startIndex, endIndex);

      return res(
        ctx.status(200),
        ctx.delay(2000),
        ctx.json({
          data: paginatedData,
          last: pageSize * pageParam >= targetMeals.length,
          totalPage: Math.ceil(targetMeals.length / pageSize),
          totalRecords: targetMeals.length,
          page: pageParam,
        })
      );
    } catch (err) {
      return res(ctx.status(500), ctx.json({ errorMessage: 'An unexpected error occurred.' }));
    }
  }),

  rest.get('/api/recommend', (req, res, ctx) => {
    try {
      const type = (req.url.searchParams.get('type') as keyof RecommendData) || 'column';
      const pageParam = Number(req.url.searchParams.get('page') || 1);
      const pageSize = 8;
      const startIndex = (pageParam - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      const targetRecommend = type && recommend[type];

      const paginatedData = targetRecommend.slice(startIndex, endIndex);

      return res(
        ctx.status(200),
        ctx.delay(2000),
        ctx.json({
          data: paginatedData,
          last: pageSize * pageParam >= targetRecommend.length,
          totalPage: Math.ceil(targetRecommend.length / pageSize),
          totalRecords: targetRecommend.length,
          page: pageParam,
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

  rest.get('/api/diary', (req, res, ctx) => {
    try {
      const pageParam = Number(req.url.searchParams.get('page') || 1);
      const pageSize = 8;
      const startIndex = (pageParam - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      const paginatedData = diaryData.slice(startIndex, endIndex);

      return res(
        ctx.status(200),
        ctx.delay(2000),
        ctx.json({
          data: paginatedData,
          last: pageSize * pageParam >= diaryData.length,
          totalPage: Math.ceil(diaryData.length / pageSize),
          totalRecords: diaryData.length,
          page: pageParam,
        })
      );
    } catch (err) {
      return res(ctx.status(500), ctx.json({ errorMessage: 'An unexpected error occurred.' }));
    }
  }),

  rest.get('/api/excercises', (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.delay(5000), ctx.json(exerciseData));
    } catch (err) {
      return res(ctx.status(500), ctx.json({ errorMessage: 'An unexpected error occurred.' }));
    }
  }),

  rest.get('/api/chartData/:timeRange', (req, res, ctx) => {
    const { timeRange } = req.params;
    const data: LineChartData = dataByTimeRange[timeRange as TimeRangeKey];
    return res(ctx.delay(2000), ctx.json(data));
  }),
];
