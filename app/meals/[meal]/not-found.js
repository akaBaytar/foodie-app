import Image from 'next/image';
import svg from '@/public/svgs/notfound.svg';

export default function NotFound() {
  return (
    <main className='not-found'>
      <h1>404</h1>
      <h1>Meal Not Found</h1>
      <p>Unfortunately, we could not find the requested meal data.</p>
      <Image src={svg} alt='404 Not Found' />
    </main>
  );
}
