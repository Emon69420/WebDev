import './Hero.css';

const Hero = () => {
  return (
    <section className="relative px-8 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full border-2 border-primary/20 text-primary font-bold text-sm mb-6 bg-white shadow-sm rotate-[-1deg]">
            <span className="material-symbols-outlined text-lg">edit_note</span>
            Vacation Rental Growth Agency
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-[#39382f]">
            We help you grow your{' '}
            <span className="relative sketch-underline decoration-[#FF7F6A] decoration-wavy">
              vacation rental
              <span className="absolute -bottom-1 left-0 w-full h-4 bg-[#FF7F6A]/40 -z-10 rotate-1"></span>
            </span>{' '}
            business with{' '}
            <span className="italic decoration-[#FF7F6A] decoration-wavy">
              direct bookings
            </span>
            .
          </h1>
          <p className="text-xl text-on-surface/80 mb-10 max-w-xl leading-relaxed font-medium">
            Stop over-relying on OTAs. We build the digital infrastructure that turns your
            properties into a high-converting, independent hospitality brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button className="bg-primary text-white px-10 py-5 rounded-full font-black text-xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all border-b-4 border-[#823225]">
              Schedule a Strategy Call
            </button>
            <div className="flex items-center gap-3 px-4 py-4 relative">
              <div className="flex -space-x-2">
                <img
                  className="w-12 h-12 rounded-full border-4 border-white shadow-md object-cover -rotate-6"
                  alt="portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ2al9UgFom2NJN8JA5FsV5eK_mIvqaiSLOZqdU_43M-vZ2PkLcHk2aZhSWmHq8S30pcbRg4Mm7TC7XekxhtO6PJFqswltL2_5WXB3d3O-buwtPD2RhpLPyyXJh9ffhF1DQKlNDcFpXghP_t9ZtiFAY0Mz2gwLJeKE7jt6Xvlyvam8pxHTwIH-15HtVUWsF7X3DJw2mUQe--N3UXlsAax6XtQsWsTiqYRIaKnOcaUhN5GrZpgGu1J2Z5bTNFjZC5EsDSFAWK94GUA"
                />
                <img
                  className="w-12 h-12 rounded-full border-4 border-white shadow-md object-cover rotate-6"
                  alt="portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-kM66emKHWEtq2lolrHZsn8odp1wBuKrswswBCEk-W0tyowU7LQmRVLoSMk_GCGPPxGY4vIxhvN5Kce6UCpsOd8LuiCCj6m1WxMnCw9THdYWHchXR8ZuVBw4os_8m8T3hnlDi7dc1DS3bSHGGrmjs3NZEWiaY6l20GWVAB6Guh4_wNyZYCrsKIfxXeX_ZB-iQHuejd8iUrzwhy-qXuyDLMfOuuXrkhlXump3EM5aUCxvN33SU96CUlJ5-Swhm3drhlH8rf_52yxo"
                />
              </div>
              <p className="text-sm font-bold text-on-surface/70">
                <span className="text-primary">50+</span> Owners scaled this year
              </p>
              {/* Doodle: Squiggly Arrow */}

            </div>
          </div>
        </div>

        {/* Right Content - Journal Collage */}
        <div className="relative">
          <div className="relative z-10 grid grid-cols-2 gap-6 p-4">
            <div className="polaroid rotate-[-4deg] transform hover:rotate-0 transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                className="w-full aspect-[4/5] object-cover"
                alt="cozy apartment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvKyLmKQCFLH06LG_u0BZ6783Kem6a87mso9n63ivssPCN8dbjZAPTxrARA7i1SFh6dpFdDAgdwC4-2ZCsrfpD0vsYiH-tA6Jk7iv53Cj4SVUDnyXNPLHU7Sb5XdjbyAPi4cSy_Tp4HCafHtke10I5YoiSaFgQvo0Qenvt1-tIStAwjX-noo8lmH943j8uXKBtxHrGJsjiQJx9kl-3QxdvSQPxm76EosYb1H9VTgjRS2z9oTLYs7eFxLRutljjO8aa-d8hUUOtZSk"
              />
              <p className="font-headline pt-4 text-sm text-[#4a6a6a] italic font-bold tracking-tight">
                Mountain Escape, CO
              </p>
            </div>
            <div className="polaroid rotate-[6deg] translate-y-12 transform hover:rotate-0 transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                className="w-full aspect-[4/5] object-cover"
                alt="luxury villa"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa4JBH3VCQoTLCTz5TsENyB5tgxFg6GPC2y6APfia6PyBIJptC-mknCcqwCPL7kHnxcC2Ytv23UNPMUuJo4996ukU5H_2kO7WwqWaRj5548PBlRGMy3VvKhkK--7rlopfMMFCy5sl5DOaWKwER_VLLujSxUOEdqVul4iBRPl3ifKHGUNBV8jugOpIUN9ExR_BUyTFdBOYEeRluADIlIjex3uqW53CSuVVpMkBXS0jBVlDzcJqA_AfncmQVheR7iPmlE3813OE98oo"
              />
              <p className="font-headline pt-4 text-sm text-[#4a6a6a] italic font-bold tracking-tight">
                Ocean Breeze, FL
              </p>
            </div>
          </div>
          {/* Hand-drawn Travel Doodles */}
          <div className="absolute -bottom-16 -left-12 text-primary/30 z-20 doodle-float">
            <span className="material-symbols-outlined text-[120px]">waves</span>
          </div>
          <div
            className="absolute top-0 -right-8 text-[#FF7F6A]/40 z-20 doodle-float"
            style={{ animationDelay: '2s' }}
          >
            <span className="material-symbols-outlined text-[100px]">sunny</span>
          </div>
          <div
            className="absolute -op-1/2 -right-6 text-primary/30 z-20 doodle-float"
            style={{ animationDelay: '1s' }}
          >
            <span className="material-symbols-outlined text-[80px]">travel_luggage_and_bags</span>
          </div>
          <div className="absolute -top-10 left-1/4 text-primary/20 doodle-float">
            <span className="material-symbols-outlined text-6xl">airplanemode_active</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
