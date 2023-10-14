import {
  generateChartData,
  generateDiaryEntries,
  generateExercises,
  generateMeals,
  generateRecommend,
} from '@/helpers';
import { faker } from '@faker-js/faker';

const recentDate = faker.date.recent({ days: 10 });
const year = recentDate.getFullYear();
const month = recentDate.getMonth() + 1;
const day = recentDate.getDate();
const formattedDate = `${year}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;

export const meals = {
  morning: generateMeals('morning', 10),
  lunch: generateMeals('lunch', 10),
  dinner: generateMeals('dinner', 10),
  snack: generateMeals('snack', 10),
};

export const recommend = {
  column: generateRecommend('column', 20),
  diet: generateRecommend('diet', 20),
  beauty: generateRecommend('beauty', 20),
  health: generateRecommend('health', 20),
};

export const diaryData = generateDiaryEntries(40);
export const exerciseData = {
  date: formattedDate,
  data: generateExercises(40),
};

export const dataByTimeRange = {
  日: generateChartData(
    [...Array(24)].map((_, i) => `${i}時`),
    100
  ),
  週: generateChartData(['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'], 700),
  月: generateChartData(
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ],
    1000
  ),
  年: generateChartData(['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], 12000),
};
