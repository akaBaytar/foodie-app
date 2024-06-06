import Grid from './Grid';
import { getMeals } from '@/lib/meals';

export default async function Meals() {
  const meals = await getMeals();

  return <Grid meals={meals} />;
}
