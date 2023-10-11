export const BASE_PATH = '/';
import { Exercise } from '@/types';
import { faker, fakerJA } from '@faker-js/faker';

export const isTrue = (value?: string | number) => {
  return (typeof value === 'string' && value?.toUpperCase() === 'TRUE') || value === 1;
};

export const generateMeals = (type: 'morning' | 'lunch' | 'dinner' | 'snack', count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    date: faker.date.recent({ days: 10 }).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' }),
    image: fakerJA.image.urlLoremFlickr({ category: 'food' }),
    label: type.charAt(0).toUpperCase() + type.slice(1),
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

export const generateDiaryEntries = (count: number) => {
  return Array.from({ length: count }, () => ({
    date: faker.date
      .recent({ days: 10 })
      .toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
    time: faker.date.recent().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
    description: `${faker.lorem.sentence(4)}...`,
  }));
};
