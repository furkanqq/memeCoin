export const MemeCoinSectionTwo: React.FC = () => {
  return (
    <section className="relative bg-white text-primaryColor py-20 px-10 overflow-hidden">
      <div className="pb-10 flex justify-center space-x-6 cursor-pointer">
        <img
          src="/momey.webp"
          alt="Meme Coin 1"
          className="w-20 h-20 hover:animate-wiggle hover:animate-infinite rounded-3xl"
        />
        <img
          src="/momey.webp"
          alt="Meme Coin 1"
          className="w-20 h-20 hover:animate-jump hover:animate-infinite rounded-3xl"
        />
        <img
          src="/momey.webp"
          alt="Meme Coin 1"
          className="w-20 h-20 hover:animate-rotate-x hover:animate-infinite rounded-3xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-primaryColor via-orange-400 to-orange-700 bg-clip-text text-transparent animate-text">
          The Future of Fun Finance!
        </h2>

        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
          Dive into the world where memes meet money. Embrace the chaos and be a part of a vibrant community that’s
          redefining what it means to invest.
        </p>

        <div className="pt-10 flex justify-center space-x-6 cursor-pointer">
          <img
            src="/momey.webp"
            alt="Meme Coin 1"
            className="w-20 h-20 hover:animate-wiggle-more hover:animate-infinite rounded-3xl"
          />
          <img
            src="/momey.webp"
            alt="Meme Coin 1"
            className="w-20 h-20 hover:animate-bounce hover:animate-infinite rounded-3xl"
          />
          <img
            src="/momey.webp"
            alt="Meme Coin 1"
            className="w-20 h-20 hover:animate-rotate-y hover:animate-infinite rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};
