import Image from 'next/image';

import { IconArrowRight } from '@/assets/IconArrowRight';
import { Container } from '../Container';

const SmallSection = () => {
  return (
    <div className="items-center justify-center flex flex-wrap bg-transparent rounded-lg mt-32" id="about">
      <div className="relative md:w-4/12 md:flex hidden ml-auto mr-auto px-4 ">
        <Image
          alt="..."
          className="max-w-full rounded-lg shadow-lg bg-primaryColor"
          src="/momey.webp"
          width={300}
          height={400}
        />
      </div>
      <div className="w-full md:w-5/12 ml-auto mr-auto px-12 pb-10 pt-4 rounded-lg">
        <div className="h-[400px] flex flex-col justify-center items-center">
          <h3 className="text-3xl font-semibold">The Tale of Momey Coin</h3>
          <p className="mt-4 text-md leading-relaxed text-blueGray-500">
            On a sunny island, a clever monkey named Momo was tired of trading bananas. He dipped his best bananas in
            gold and created Momey Coin, declaring, “Bananas are out, gold is in!”
            <br />
            At first, the other monkeys laughed, but soon they were using Momey Coins for everything—coconuts, hammocks,
            and even jungle concerts! Momo became a legend, proving that even monkeys can make golden ideas swing. 🐒💰
          </p>
        </div>
      </div>
    </div>
  );
};

export { SmallSection };
