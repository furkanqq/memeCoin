import Image from 'next/image';
import Link from 'next/link';

import Button from '../Button';

const Footer = () => {
  return (
    <div className="relative mt-16 bg-backgroundColor ">
      <div className="flex justify-between items-center pt-5 pb-5 border-t border-deep-purple-accent-200 flex-row px-2 sm:px-40">
        <Link href="/" aria-label="Go home" title="Company" className="hidden sm:inline-flex items-center">
          <Image src={'/meme_text.png'} alt="logo" width={200} height={40} />
        </Link>
        <p className="text-xs sm:text-sm text-foreground">© Copyright 2024 Momey Coin All rights reserved.</p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <Button
            className="flex justify-center items-center gap-4 w-1/2 text-black"
            variant="light"
            title="Start Matching!"
            size="sm"
            type={'button'}
          >
            <Image src={'/twitter.png'} alt="telegram" width={32} height={32} />
          </Button>
          <Button
            className="flex justify-center items-center gap-4 w-1/2 text-black"
            variant="light"
            title="Start Matching!"
            size="sm"
            type={'button'}
          >
            <Image src={'/telegram.png'} alt="telegram" width={32} height={32} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Footer };
