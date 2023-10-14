export const BASE_PATH = '/';
import { mealLabelMap } from '@/const/meals';
import { Category, Diary, Exercise, MealTime, MealTimes } from '@/types';
import { faker, fakerJA } from '@faker-js/faker';

const recentDate = faker.date.recent({ days: 10 });
const year = recentDate.getFullYear();
const month = recentDate.getMonth() + 1;
const day = recentDate.getDate();
const formattedFullDate = `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
const formattedDate = `${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;

export const isTrue = (value?: string | number) => {
  return (typeof value === 'string' && value?.toUpperCase() === 'TRUE') || value === 1;
};

export const generateMeals = (type: MealTime, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    date: formattedDate,
    image: fakerJA.image.urlLoremFlickr({ category: 'food' }),
    label: type.charAt(0).toUpperCase() + type.slice(1),
  }));
};

export const generateRecommend = (type: Category, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    date: formattedFullDate,
    time: faker.date.recent().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
    image: fakerJA.image.urlLoremFlickr({ category: 'food' }),
    title: fakerJA.lorem.sentence(28),
    tags: Array(2).fill(`#${fakerJA.lorem.word()}`),
  }));
};

export const generateExercises = (count: number): Exercise[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    description: fakerJA.lorem.words(8),
    timeSpent: `${faker.number.int({ min: 5, max: 60 })} min`,
    caloriesBurned: `${faker.number.int({ min: 10, max: 300 })}kcal`,
  }));
};

export const generateDiaryEntries = (count: number): Diary[] => {
  return Array.from({ length: count }, () => ({
    date: formattedFullDate,
    time: faker.date.recent().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
    description: `${fakerJA.lorem.sentence(20)}`,
  }));
};

export const getMealBadgeContent = (date: string, mealTime: MealTimes) => {
  return `${date}.${mealLabelMap[mealTime]}`;
};

export const getRecommendBadgeContent = (date: string, time: string) => {
  return `${date}   ${time}}`;
};

export const generateChartData = (labels: string[], maxDataValue: number) => ({
  labels,
  datasets: [
    {
      label: 'Weight',
      data: Array.from({ length: labels.length }, () => faker.number.int({ min: 0, max: maxDataValue })),
      borderColor: 'cyan',
      backgroundColor: 'transparent',
      pointBackgroundColor: 'cyan',
      pointBorderColor: 'cyan',
    },
    {
      label: 'Body Fat Percentage',
      data: Array.from({ length: labels.length }, () => faker.number.int({ min: 0, max: maxDataValue })),
      borderColor: 'orange',
      backgroundColor: 'transparent',
      pointBackgroundColor: 'orange',
      pointBorderColor: 'orange',
    },
  ],
});
