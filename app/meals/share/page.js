import { ImagePicker, Button } from '@/components';
import { shareMeal } from '@/lib/actions';

import classes from './page.module.css';

export const metadata = {
  title: 'Foodie - Share Meal',
  description: 'Share your favorite meal.',
};

export default function Share() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input
                type='text'
                id='name'
                name='name'
                autoComplete='name'
                required
              />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input
                type='email'
                id='email'
                name='email'
                autoComplete='email'
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' required />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input type='text' id='summary' name='summary' required />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required></textarea>
          </p>
          <ImagePicker label='Image' />
          <p className={classes.actions}>
            <Button />
          </p>
        </form>
      </main>
    </>
  );
}
