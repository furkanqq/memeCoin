import Image from 'next/image';

import { Container } from '../Container';

const HeaderSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-primaryColor py-24 sm:py-32">
      <Image
        src={'/meme_text.png'}
        alt="pattern"
        fill
        className="absolute object-cover opacity-5"
        objectFit="contain"
      />
      <Container>
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Join the Meme Revolution</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-backgroundColor sm:text-xl/8">
              Welcome to the fun side of crypto! Embrace the power of memes and watch your investment turn into the next
              big thing. The future is now, and it’s hilarious.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <p>
                Explore our Roadmap <span aria-hidden="true">&rarr;</span>
              </p>
              <p>
                Join our Meme Contest <span aria-hidden="true">&rarr;</span>
              </p>
              <p>
                Community Values <span aria-hidden="true">&rarr;</span>
              </p>
              <p>
                Meet the Meme Masters <span aria-hidden="true">&rarr;</span>
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Memes Created</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">1,000+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Active Members</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">10,000+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Transactions Daily</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">5,000+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Community Rewards</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">Unlimited</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { HeaderSection };
