'use client';

import { useState ,useEffect } from 'react';
import Image from 'next/image';

import burger from '@/public/images/burger.jpg';
import curry from '@/public/images/curry.jpg';
import dumplings from '@/public/images/dumplings.jpg';
import macncheese from '@/public/images/macncheese.jpg';
import pizza from '@/public/images/pizza.jpg';
import schnitzel from '@/public/images/schnitzel.jpg';
import tomatoSalad from '@/public/images/tomato-salad.jpg';

import classes from './Slideshow.module.css';

const images = [
  { img: burger, alt: 'A delicious, juicy burger' },
  { img: curry, alt: 'A delicious, spicy curry' },
  { img: dumplings, alt: 'Steamed dumplings' },
  { img: macncheese, alt: 'Mac and cheese' },
  { img: pizza, alt: 'A delicious pizza' },
  { img: schnitzel, alt: 'A delicious schnitzel' },
  { img: tomatoSalad, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.img}
          className={index === currentImage ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
