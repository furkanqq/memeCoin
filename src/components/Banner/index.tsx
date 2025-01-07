'use client';

import Image from 'next/image';

import Button from '../Button';

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row h-[100vh]">
      <div className="flex justify-center items-end pb-12 md:pb-0 md:items-center h-1/2 md:h-full w-full md:w-1/2">
        <div className="w-[65%] flex flex-col gap-4 md:gap-10">
          <h1 className="text-[32px] leading-8 md:text-[60px] text-center  md:leading-[76px] font-bold">
            {`Everyone's Favorite Momey Coin!`}
          </h1>
          <div className="p-2 border border-solid border-primaryColor text-lg text-center rounded-lg">
            0xeFc12327490862ccdc46521c8315b87fd3191p2c
          </div>
          <div className="flex gap-1">
            <Button
              className="flex justify-center items-center gap-4 w-1/2 text-black"
              variant="primary"
              title="Start Matching!"
              size="md"
              type={'button'}
            >
              <span>Twitter</span>
              <Image src={'/twitter.png'} alt="telegram" width={32} height={32} />
            </Button>
            <Button
              className="flex justify-center items-center gap-4 w-1/2 text-black"
              variant="primary"
              title="Start Matching!"
              size="md"
              type={'button'}
            >
              <span>Telegram</span>
              <Image src={'/telegram.png'} alt="telegram" width={32} height={32} />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center h-1/2 md:h-full w-full md:w-1/2">
        <div className="relative z-[1]">
          <Image
            className="object-contain rounded-lg overflow-hidden"
            src="/momey.webp"
            alt="Banner"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
