'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

export default function Header({ type = 'default' }: { type?: 'auth' | 'default' | 'landing' }) {
  const [scrollHeight, setScrollHeight] = useState(false);

  useEffect(() => {
    if (type === 'landing') {
      const getHeight = () => {
        setScrollHeight(window.scrollY > 50);
      };

      window.addEventListener('scroll', getHeight);

      return () => window.removeEventListener('scroll', getHeight);
    } else {
      setScrollHeight(true);
    }
  }, []);

  return (
    <div
      className={cn(
        'fixed top-0 flex items-center justify-center w-full h-20 transition-all z-50 bg-backgroundColor sm:bg-transparent py-9',
        {
          'sm:shadow sm:bg-backgroundColor': scrollHeight,
        }
      )}
    >
      <div className="container h-full flex items-center justify-center sm:justify-between">
        <Link href={'/'} className="">
          <Image src={'/meme_text.png'} alt="Meme Coin" width={200} height={120} />
        </Link>
        <div className="hidden sm:flex w-fit gap-5">
          <Link
            className={
              !scrollHeight
                ? 'border border-solid border-primaryColor bg-backgroundColor text-primaryColor text-[14px] font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300'
                : 'border border-solid border-primaryColor bg-primaryColor text-white text-[14px] font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300'
            }
            href={'#roadmap'}
          >
            Roadmap
          </Link>
          <Link
            className={
              !scrollHeight
                ? 'border border-solid border-primaryColor bg-backgroundColor text-primaryColor text-[14px] font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300'
                : 'border border-solid border-primaryColor bg-primaryColor text-white text-[14px] font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300'
            }
            href={'#about'}
          >
            About Us
          </Link>
          <Link
            className={
              !scrollHeight
                ? 'border border-solid border-primaryColor bg-backgroundColor text-primaryColor text-[14px] font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300'
                : 'border border-solid border-primaryColor bg-primaryColor text-white text-[14px] font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300'
            }
            href={'#revolution'}
          >
            Revolution
          </Link>
          {/* <Link
            className={
              !scrollHeight
                ? 'border border-solid border-primaryColor bg-backgroundColor text-primaryColor text-[14px] font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300'
                : 'border border-solid border-primaryColor bg-primaryColor text-white text-[14px] font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300'
            }
            href={'#revolution'}
          >
            Contact Us
          </Link> */}
        </div>
      </div>
    </div>
  );
}
