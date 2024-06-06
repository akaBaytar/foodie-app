'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import classes from './ImagePicker.module.css';

export default function ImagePicker({ label }) {
  const [pickedImage, setPickedImage] = useState();

  const input = useRef();

  const clickHandler = () => input.current.click(null);

  const imageHandler = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor=''>Image</label>

      <div className={classes.buttonContainer}>
        <label htmlFor='image'>{label}</label>
        <div className={classes.controls}>
          <input
            type='file'
            name='image'
            id='image'
            ref={input}
            onChange={imageHandler}
            accept='image/png, image/jpeg'
            required
            className={classes.input}
          />
          <button
            type='button'
            className={classes.button}
            onClick={clickHandler}>
            Pick an Image
          </button>
        </div>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt='Image selected by the user.' fill />
          )}
        </div>
      </div>
    </div>
  );
}
