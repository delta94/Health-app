import { generateMeals } from '@/helpers';

export const meals = {
  morning: generateMeals('morning', 10),
  lunch: generateMeals('lunch', 10),
  dinner: generateMeals('dinner', 10),
  snack: generateMeals('snack', 10),
};
