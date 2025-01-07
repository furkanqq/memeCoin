const Roadmap = () => {
  return (
    <div className="relative flex h-fit py-24 items-center justify-center bg-white px-6 md:px-60" id="roadmap">
      <div
        className="absolute inset-0 bg-center bg-contain opacity-10"
        style={{ backgroundImage: "url('/meme_text.png')" }}
      ></div>
      <div className="space-y-6 border-l-2 border-dashed">
        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-primaryColor"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-primaryColor">Phase 1: Launch and Community Building</h4>
            <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Bonding curve progress: 100%, DexScreener pay.</p>
            <span className="mt-1 block text-sm font-semibold text-primaryColor">2024</span>
          </div>
        </div>
        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-primaryColor"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-primaryColor">Phase 2: Expanding Ecosystem and Utility</h4>
            <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
              Decentralized Exchange Listings: Momey Coin listed on multiple DEX platforms
            </p>
            <span className="mt-1 block text-sm font-semibold text-primaryColor">2024</span>
          </div>
        </div>
        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-primaryColor"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-primaryColor">Phase 3: Scaling and Adoption</h4>
            <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
              CEX Listings: Momey Coin listed on centralized exchanges
            </p>
            <span className="mt-1 block text-sm font-semibold text-primaryColor">2024</span>
          </div>
        </div>
        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-primaryColor"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-6">
            <h4 className="font-bold text-primaryColor">Phase 4: Long-term Growth and Community Governance</h4>
            <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
              DAO Implementation: Community-driven governance model for voting on future developments
            </p>
            <span className="mt-1 block text-sm font-semibold text-primaryColor">2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Roadmap };
