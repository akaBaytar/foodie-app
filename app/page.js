import Link from 'next/link';

import { Slideshow } from '@/components';

import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <Slideshow />
        </div>
        <div className={classes.container}>
          <div className={classes.hero}>
            <h1>Next level food for next level foodies</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href='/community'>Join the Community</Link>
            <Link href='meals'>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How It Works</h2>
          <p>
            Foodie is a platform for food enthusiasts to share their favorite
            recipes with the world. Discover new dishes, exchange cooking tips,
            and connect with fellow food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Foodie?</h2>
          <p>
            Foodie is the go-to place for sharing your culinary creations and
            finding inspiration from others. Join a community of passionate
            foodies and elevate your cooking skills by exploring diverse recipes
            and connecting with like-minded individuals.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Join the Community</h2>
          <p>
            Become a part of the Foodie community today! Sign up to share your
            recipes, save your favorite dishes, and engage with other food
            lovers through comments and discussions. Let&apos;s cook and share
            together!
          </p>
        </section>

        <section className={classes.section}>
          <h2>Top Recipes</h2>
          <p>
            Explore our curated selection of top recipes, handpicked by our
            community. From appetizers to desserts, find the best recipes that
            are sure to impress your family and friends.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Cooking Tips & Tricks</h2>
          <p>
            Enhance your cooking skills with our expert tips and tricks. Learn
            new techniques, discover time-saving hacks, and get advice from
            seasoned cooks to make your culinary journey even more enjoyable.
          </p>
        </section>
      </main>
    </>
  );
}
