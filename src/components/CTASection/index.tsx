import Link from 'next/link';

import { Container } from '../Container';

const CTASection = () => {
  return (
    <Container>
      <div className="w-full">
        <div className="mx-auto w-full py-24 sm:py-32">
          <div className="w-full relative isolate overflow-hidden bg-primaryColor px-6 pt-16 shadow-2xl rounded-lg sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Boost your productivity. Start using our app today.
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="/"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </Link>
                <Link href="/" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              {/* <Image
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width="1824"
                height="1080"
              /> */}
              <div className="absolute w-[1824px] h-[1080px] left-0 top-0  max-w-none rounded-md bg-white ring-1 ring-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { CTASection };
