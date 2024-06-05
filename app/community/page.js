import Image from 'next/image';

import meal from '@/public/assets/meal.png';
import community from '@/public/assets/community.png';
import events from '@/public/assets/events.png';

import macncheese from '@/public/images/macncheese.jpg';
import tomatoSalad from '@/public/images/tomato-salad.jpg';

import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <section className={classes.perksSection}>
          <h2>Community Perks</h2>
          <ul className={classes.perks}>
            <li>
              <Image src={meal} alt='A delicious meal' />
              <p>Share & discover recipes</p>
            </li>
            <li>
              <Image src={community} alt='A crowd of people, cooking' />
              <p>Find new friends & like-minded people</p>
            </li>
            <li>
              <Image src={events} alt='A crowd of people at a cooking event' />
              <p>Participate in exclusive events</p>
            </li>
          </ul>
        </section>

        <section className={classes.trending}>
          <h2>Trending Recipes</h2>
          <ul className={classes.recipes}>
            <li>
              <p>Mac n Cheese</p>
              <Image src={macncheese} alt='Mac n Cheese' />
            </li>
            <li>
              <p>Tomato Salad</p>
              <Image src={tomatoSalad} alt='Tomato Salad' />
            </li>
          </ul>
        </section>

        <section className={classes.cta}>
          <h2>Ready to Join?</h2>
          <p>Sign up now and start your culinary adventure!</p>
          <button >Join Now</button>
        </section>
      </main>
    </>
  );
}
