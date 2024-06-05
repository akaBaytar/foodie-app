import Link from 'next/link';

import { Grid } from '@/components';
import { getMeals } from '@/lib/meals';

import classes from './page.module.css';

export default function Meals() {
  const meals = getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Grid meals={meals} />
      </main>
    </>
  );
}
