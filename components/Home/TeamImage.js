'use client';
import Image from 'next/image';
import Cursor from '../../assets/cursor.svg';
import { useEffect, useRef } from 'react';

export default function TeamImage({ imagesArr }) {
  const ref = useRef();

  useEffect(() => {
    const postionCursor = (e) => {
      if (!ref.current) return;
      if (!e.target.classList.contains('member__img')) return;
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      ref.current.children[0].style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener('mousemove', postionCursor);

    return () => window.removeEventListener('mousemove', postionCursor);
  }, []);

  const images = imagesArr.map((img, index) => (
    <div key={index}>
      <Image className="member__img" src={img} alt={`image__${index}`} />
    </div>
  ));

  return (
    <div ref={ref} className="team__img">
      <Cursor className="cursor" />

      {images}
    </div>
  );
}
