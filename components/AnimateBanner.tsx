'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const AnimateBanner = () => {
  const image = useRef<any>(null);
  const tl = useRef<any>(null);

  useEffect(() => {
    const { current: e } = image;
    const dotsBox = e.getElementById('dots-box');
    const dot1 = e.getElementById('dot-1');
    const dot2 = e.getElementById('dot-2');
    const dot3 = e.getElementById('dot-3');
    const envelopeBoxShadow = e.getElementById('envelope-box-shadow');
    const characterBoxShadow = e.getElementById('character-box-shadow');
    const home = e.getElementById('home');
    const arm = e.getElementById('arm');
    const hand = e.getElementById('hand');
    const envelopeBox = e.getElementById('envelope-box');
    const envelopeWhiteEl = e.getElementById('envelope-white');
    const envelopeDarkEl = e.getElementById('envelope-dark');
    const envelopeLine1 = e.getElementById('envelope-line-1');
    const envelopeLine2 = e.getElementById('envelope-line-2');
    const characterBox = e.getElementById('character-box');
    const chacacterCircle = e.getElementById('circle');
    const chacacterCircleWhite = e.getElementById('circle-white');
    const chacacterBody = e.getElementById('body');
    const chacacterLine1 = e.getElementById('character-line-1');
    const chacacterLine2 = e.getElementById('character-line-2');

    const dotsInBox = [dotsBox, dot1, dot2, dot3];
    const envelopeElements = [
      envelopeBox,
      envelopeBoxShadow,
      envelopeWhiteEl,
      envelopeDarkEl,
      envelopeLine1,
      envelopeLine2,
    ];

    const characterElements = [
      characterBox,
      characterBoxShadow,
      chacacterCircle,
      chacacterCircleWhite,
      chacacterBody,
      chacacterLine1,
      chacacterLine2,
    ];

    tl.current = gsap.timeline();
    tl.current
      .set([image.current], { autoAlpha: 0, y: '+=25' })
      .set([dot1, dot2, dot3], { autoAlpha: 0, y: '-=200' })
      .set(dotsBox, { autoAlpha: 0, y: '-=200' })
      .to(image.current, { autoAlpha: 1, duration: 1, y: '0' })
      .to(dotsBox, { autoAlpha: 1, duration: 0.5, y: '0' })
      .to(dotsInBox[1], { duration: 0.3, autoAlpha: 0, y: '-=2' })
      .to(dotsInBox[1], { duration: 0.3, autoAlpha: 1, y: '0' })
      .to(dotsInBox[2], { duration: 0.3, autoAlpha: 0, y: '-=2' })
      .to(dotsInBox[2], { duration: 0.3, autoAlpha: 1, y: '0' })
      .to(dotsInBox[3], { duration: 0.3, autoAlpha: 0, y: '-=2' })
      .to(dotsInBox[3], { duration: 0.3, autoAlpha: 1, y: '0' })
      .to([arm, hand], { duration: 0.5, y: '+=3', x: '+=3' })
      .to(home, { duration: 0.5, fill: '#818cf8' })
      .to(
        [envelopeBoxShadow, characterBoxShadow],
        {
          duration: 1,
          autoAlpha: 0.9,
          fill: '#818cf8',
        },
        '-=0.1',
      )
      .to(
        envelopeElements,
        {
          duration: 0.1,
          scale: 1.2,
          x: '-=15',
        },
        '-=0.2',
      )
      .to(envelopeElements, {
        duration: 0.6,
        scale: 0,
        x: '+=200',
      })
      .to(characterBoxShadow, {
        duration: 1,
        autoAlpha: 0,
      })
      .to(characterElements, {
        duration: 1,
        x: '-=52.65',
        y: '-=70.5',
      })
      .to(
        characterBox,
        {
          duration: 1,
          fill: '#217c3cb8',
        },
        '-=0.5',
      );
  }, []);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 400 300'
      width='406'
      height='306'
      className='h-full w-full'
      ref={image}
    >
      <title>QuickCommerce - animate banner</title>
      <ellipse
        cx='205.57'
        cy='253.36'
        rx='151.73'
        ry='20.72'
        fill='#e6e6e6'
        opacity='0.45'
      ></ellipse>
      <path
        d='M286.39,234.78s-12.07-3.24-14.74-14.46c0,0,18.67-3.85,19.28,15.43Z'
        fill='#6366f1'
        opacity='0.58'
      ></path>
      <path
        d='M287.87,233.58s-8.48-13.29-1.12-25.77c0,0,14.24,9,8,25.77Z'
        fill='#6366f1'
        opacity='0.73'
      ></path>
      <path
        d='M290,233.58s4.39-14.09,17.84-16.81c0,0,2.56,9.12-8.65,16.81Z'
        fill='#6366f1'
      ></path>
      <polygon
        points='281.29 233.3 283.81 250.01 299.2 250.01 301.4 233.3 281.29 233.3'
        fill='#24285b'
      ></polygon>
      <rect
        x='142.94'
        y='45.32'
        width='114.13'
        height='204.69'
        fill='#c9c9c9'
      ></rect>
      <rect
        x='152.38'
        y='68.66'
        width='94.47'
        height='144.05'
        fill='#fff'
      ></rect>
      <rect
        x='211.51'
        y='85.91'
        width='45.55'
        height='39.97'
        opacity='0.08'
        id='envelope-box-shadow'
      ></rect>
      <rect
        x='204.51'
        y='144.5'
        width='52.55'
        height='39.97'
        opacity='0.08'
        id='character-box-shadow'
      ></rect>
      <circle
        cx='200.35'
        cy='231.16'
        r='11.17'
        fill='#fff'
        opacity='0.56'
        id='home'
      ></circle>
      <path
        d='M185.75,123.69l18.76,2.8-.58,1.25a37.39,37.39,0,0,0-3.17,13.35c-.14,2.24-1.41,5.3-5.63,8.9-7.2,6.14-11.83,25.91-21.39,33.63a26,26,0,0,0-9.34,19.22L162.54,250H144l4.09-72.11L153,153,165,140.68l11-14.19,5-2.8Z'
        opacity='0.08'
      ></path>
      <rect x='190.35' y='53.32' width='32' height='4.67' opacity='0.12'></rect>
      <circle cx='178.76' cy='56.16' r='5.21' fill='#fff'></circle>
      <polygon
        points='152.96 150.52 170.92 128.13 174.8 131.53 159.49 157.13 152.96 150.52'
        fill='#6366f1'
        id='arm'
      ></polygon>
      <polygon
        points='123.21 113.64 126.52 123.59 118.65 128.59 115.82 111.35 123.21 113.64'
        fill='#f4a28c'
      ></polygon>
      <path
        d='M113.12,101.74A6.19,6.19,0,0,1,123.36,100c3.35,3.57,7.39,9.26,2.82,12.36-7,4.74-13.41-4.12-13.41-4.12A11.25,11.25,0,0,1,113.12,101.74Z'
        fill='#f4a28c'
      ></path>
      <path
        d='M118.23,107.84s-1.79-1.5-2.61.63,2.36,3.15,3.3,2.08S118.23,107.84,118.23,107.84Z'
        fill='#f4a28c'
      ></path>
      <path
        d='M109.46,133.47a20.11,20.11,0,0,1,12.62-11c10.69-3.21,30.39.3,36.39,10.31,8.22,13.69-3.81,57.2-3.81,57.2l-35.94,2.79S99,157.09,109.46,133.47Z'
        fill='#6366f1'
      ></path>
      <polygon
        points='154.66 189.96 149.93 251.74 142.46 251.74 135.78 203.74 119.26 192.75 154.66 189.96'
        fill='#24285b'
      ></polygon>
      <polygon
        points='119.26 192.75 108.95 251.74 116.96 251.74 134.27 202.73 119.26 192.75'
        fill='#24285b'
      ></polygon>
      <path
        d='M125.19,121.51s-16.81,54.14,31.73,57.73L154.66,190l-35.94,2.79s-12.66-19.89-12.13-47.82c0,0,.31-13.81,10-19.91A22,22,0,0,1,125.19,121.51Z'
        opacity='0.08'
      ></path>
      <path
        d='M110.83,251.61,106,255.17a1.07,1.07,0,0,0,.63,1.92h8.09a1.07,1.07,0,0,0,1.06-1.07v-4.41Z'
        fill='#6366f1'
      ></path>
      <path
        d='M149,251.61l4.55,3.56a1.07,1.07,0,0,1-.66,1.92h-5.76A3.08,3.08,0,0,1,144,254v-2.4Z'
        fill='#6366f1'
      ></path>
      <path
        d='M139.84,122.17a18.12,18.12,0,0,0,0,19.16c3.92,6.62,15.33,19.5,23.12,28a8.23,8.23,0,0,0,13.27-1.55L193,138.27l-5.68-3.64-15.35,22.5S161.44,122.6,139.84,122.17Z'
        fill='#6366f1'
      ></path>
      <path
        d='M139.84,122.17a18.12,18.12,0,0,0,0,19.16c3.92,6.62,15.33,19.5,23.12,28a8.23,8.23,0,0,0,13.27-1.55L193,138.27l-5.68-3.64-15.35,22.5S161.44,122.6,139.84,122.17Z'
        fill='#fff'
        opacity='0.2'
      ></path>
      <path
        d='M191,137s9.51-3.49,5.63-8.87-9.33,6.5-9.33,6.5Z'
        fill='#f4a28c'
      ></path>
      <rect
        x='187.87'
        y='118.85'
        width='9.39'
        height='13.69'
        transform='translate(68.2 -67.73) rotate(24.13)'
        fill='#ffd200'
      ></rect>
      <path
        d='M116.34,114.51,111,109a5.84,5.84,0,0,1-1.62-4.33c.13-2.8.73-7.27,3-10.63,3.64-5.26,8.49-7.25,9.69-2.7s1.46-.85,4.39,1.56,2.33,3.84,0,5.12-7.16,3.14-7.59,7S122.14,111.93,116.34,114.51Z'
        fill='#24285b'
      ></path>
      <path
        d='M171.83,128.93s1.19-8.21,9.15-7.42,5.05,2.82,1.84,3h0a3.73,3.73,0,0,0-2.8,2.56c-.47,1.44-1.76,3.3-5.19,4.48Z'
        fill='#f4a28c'
        id='hand'
      ></path>
      <rect
        x='211.51'
        y='80'
        width='95.53'
        height='39.97'
        fill='#ffd200'
        id='envelope-box'
      ></rect>
      <rect
        x='204.51'
        y='139'
        width='95.53'
        height='39.97'
        fill='#ffd200'
        id='character-box'
      ></rect>
      <rect
        x='222.35'
        y='88.67'
        width='31.7'
        height='20.31'
        fill='#fff'
        id='envelope-white'
      ></rect>
      <polygon
        points='222.35 88.67 238.19 103.5 254.04 88.67 222.35 88.67'
        fill='#24285b'
        id='envelope-dark'
      ></polygon>
      <rect
        x='265.71'
        y='90.83'
        width='29.17'
        height='6'
        fill='#fff'
        id='envelope-line-1'
      ></rect>
      <rect
        x='265.71'
        y='100.5'
        width='29.17'
        height='6'
        fill='#fff'
        opacity='0.46'
        id='envelope-line-2'
      ></rect>
      <rect
        x='254.63'
        y='149.99'
        width='31.61'
        height='6'
        fill='#fff'
        id='character-line-1'
      ></rect>
      <rect
        x='254.63'
        y='159.66'
        width='31.61'
        height='6'
        fill='#fff'
        opacity='0.46'
        id='character-line-2'
      ></rect>
      <circle
        cx='230.93'
        cy='158.67'
        r='14.79'
        fill='#24285b'
        id='circle'
      ></circle>
      <circle
        cx='231.29'
        cy='154.95'
        r='5.68'
        fill='#fff'
        id='circle-white'
      ></circle>
      <path
        d='M221,169.65s1.23-8.68,9.91-9.13c9.2-.47,9.91,9.13,9.91,9.13a14.79,14.79,0,0,1-19.82,0Z'
        fill='#fff'
        opacity='0.24'
        id='body'
      ></path>
      <polygon
        points='98.75 119.51 90.54 116.15 90.54 108.35 58.29 108.35 58.29 128.44 90.54 128.44 90.54 121.68 98.75 119.51'
        fill='#e6e6e6'
        id='dots-box'
      ></polygon>
      <circle cx='67.2' cy='118.4' r='2.45' opacity='0.12' id='dot-1'></circle>
      <circle cx='74.36' cy='118.4' r='2.45' opacity='0.12' id='dot-2'></circle>
      <circle cx='81.35' cy='118.4' r='2.45' opacity='0.12' id='dot-3'></circle>
    </svg>
  );
};

export default AnimateBanner;
