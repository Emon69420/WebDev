import './Contact.css';

const Contact = () => {
  return (
    <div className="bg-[#fffbff] font-body text-[#39382f] selection:bg-[#FF7F6A]/30">
      <main className="min-h-screen relative overflow-hidden">
        {/* Background Doodles */}
        <div className="absolute top-20 right-10 w-32 h-32 text-[#ac4131]/10 pointer-events-none rotate-12">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <path d="M10 80 Q 50 10 90 80 M 30 80 Q 50 40 70 80" strokeLinecap="round" />
            <path d="M45 20 L 55 20 M 40 35 L 60 35" strokeLinecap="round" />
          </svg>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF7F6A26] text-[#ac4131] text-xs font-bold mb-6 tracking-wide uppercase border-2 border-dashed border-[#ac4131]/30">
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.1] mb-6 tracking-tight text-[#39382f]">
                Let&apos;s Talk About <br />
                <span className="relative inline-block">
                  Your Growth.
                  <svg
                    className="absolute -bottom-4 left-0 w-full h-4 text-[#FF7F6A] opacity-60"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 20"
                  >
                    <path
                      d="M2 15 C 20 15 20 5 40 5 C 60 5 60 15 80 15 C 90 15 100 10 100 10"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#4a6a6a] max-w-xl leading-relaxed mb-8 font-medium italic">
                Ready to elevate your vacation rental brand? Our consultations are a deep dive into
                your property&apos;s potential. We&apos;ll sketch out a strategy that turns casual
                browsers into lifelong guests.
              </p>
              <div className="flex flex-col gap-6 mt-12">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 sketch-border flex items-center justify-center text-[#ac4131] transition-transform group-hover:rotate-6">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#39382f] font-headline">Office Hours</h4>
                    <p className="text-sm text-[#4a6a6a]">Mon – Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 sketch-border flex items-center justify-center text-[#ac4131] transition-transform group-hover:-rotate-6">
                    <span className="material-symbols-outlined">share</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#39382f] font-headline">Connect With Us</h4>
                    <div className="flex gap-4 mt-1">
                      <a
                        className="text-sm text-[#4a6a6a] hover:text-[#ac4131] transition-colors marker-underline"
                        href="#"
                      >
                        LinkedIn
                      </a>
                      <a
                        className="text-sm text-[#4a6a6a] hover:text-[#ac4131] transition-colors marker-underline"
                        href="#"
                      >
                        Instagram
                      </a>
                      <a
                        className="text-sm text-[#4a6a6a] hover:text-[#ac4131] transition-colors marker-underline"
                        href="#"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pt-10">
              {/* Paper Plane Animation Path */}
              <div className="absolute -top-10 right-0 w-48 h-48 opacity-20 pointer-events-none">
                <svg fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 180 Q 50 100 180 20"
                    stroke="#ac4131"
                    strokeDasharray="8 8"
                    strokeWidth="2"
                  />
                  <path d="M170 10 L 190 20 L 175 35 L 170 10 Z" fill="#ac4131" />
                </svg>
              </div>

              {/* Form Container as Notebook Page */}
              <div className="bg-[#fdf9f1] notebook-edge ripped-edge p-8 md:p-12 shadow-2xl relative z-10 rotate-1 transform-gpu">
                <div className="absolute top-4 right-8 bg-[#ac4131] text-white px-4 py-1 text-xs font-bold shadow-md">
                  SEND US A POSTCARD
                </div>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#39382f] font-label">Name</label>
                      <input
                        className="w-full bg-transparent border-b-2 border-[#ac4131]/20 focus:border-[#ac4131] focus:ring-0 transition-all placeholder:text-[#4a6a6a]/40 font-medium py-2"
                        placeholder="Your name"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#39382f] font-label">Email</label>
                      <input
                        className="w-full bg-transparent border-b-2 border-[#ac4131]/20 focus:border-[#ac4131] focus:ring-0 transition-all placeholder:text-[#4a6a6a]/40 font-medium py-2"
                        placeholder="hello@adventure.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#39382f] font-label">
                      Website URL{' '}
                      <span className="text-xs font-normal opacity-60">(Optional)</span>
                    </label>
                    <input
                      className="w-full bg-transparent border-b-2 border-[#ac4131]/20 focus:border-[#ac4131] focus:ring-0 transition-all placeholder:text-[#4a6a6a]/40 font-medium py-2"
                      placeholder="https://yourrental.com"
                      type="url"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#39382f] font-label">
                      Your Goal / Message
                    </label>
                    <textarea
                      className="w-full bg-[#39382f]/5 border-2 border-dashed border-[#ac4131]/20 rounded-xl p-4 focus:border-[#ac4131] focus:ring-0 transition-all placeholder:text-[#4a6a6a]/40 resize-none font-medium"
                      placeholder="Tell us your story..."
                      rows="4"
                    />
                  </div>
                  <button
                    className="w-full bg-[#ac4131] text-white font-bold py-4 rounded-full shadow-lg hover:shadow-[#ac4131]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group overflow-hidden relative"
                    type="submit"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Inquiry
                      <span className="material-symbols-outlined group-hover:translate-x-12 group-hover:-translate-y-12 transition-all duration-500">
                        send
                      </span>
                    </span>
                  </button>
                </form>
              </div>

              {/* Coffee Stain Doodle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 pointer-events-none">
                <svg className="text-[#39382f]" fill="currentColor" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="0.5" />
                  <path
                    d="M10 50 A 40 40 0 1 1 90 50"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section with Tonal Shift */}
        <section className="bg-[#fdf9f1] py-24 px-8 relative overflow-hidden">
          {/* Sun Doodle */}
          <div className="absolute top-10 left-10 w-20 h-20 text-[#FF7F6A] opacity-20 animate-pulse">
            <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="15" />
              <path
                d="M50 10 L 50 25 M 50 75 L 50 90 M 10 50 L 25 50 M 75 50 L 90 50 M 22 22 L 32 32 M 68 68 L 78 78 M 22 78 L 32 68 M 68 22 L 78 32"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1 relative">
                <div className="relative p-4 sketch-border bg-white shadow-xl -rotate-2 transition-transform hover:rotate-0 duration-500">
                  <div className="relative rounded-lg overflow-hidden aspect-video md:aspect-square bg-stone-100">
                    <img
                      alt="Office Location Map"
                      className="w-full h-full object-cover sepia-[.3] contrast-75 brightness-110"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgfk9WINgd4bx3iueo6nN3luib_ypgqrGE6ZgHUdk0f84UvaL6DOZgVc_HEJu5AlrH8qhhH6rSSeF22I6lU78hAYPOhgWDuRb06xycJq2pSGuim3wU8dQjmlGgYiffjfjWAcqY9AoPaNwv7bYbX4cntEYdgKWIi3NyzAS8XOhZnurPnD_-sG7o28fnBN_IOurOXti7oPFKhrXYiCbi2XHKazVm0o1P9wCltuGQzCw2qiF74hEQPl5s58WwW5Bxooq5Tw5OsrBjep8"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ac4131]">
                      <div className="relative">
                        <span
                          className="material-symbols-outlined text-6xl drop-shadow-lg"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          push_pin
                        </span>
                        <div className="absolute -top-6 -right-12 bg-[#FF7F6A] text-white text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap shadow-md uppercase tracking-tighter">
                          Base Camp
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Compass Doodle */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 text-[#ac4131]/20">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" />
                    <path
                      d="M50 20 L 50 80 M 20 50 L 80 50 M 50 20 L 60 50 L 50 80 L 40 50 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <h2 className="text-4xl font-extrabold font-headline mb-6 text-[#39382f]">
                  Built for Explorers,
                  <br />
                  <span className="marker-underline italic">by Explorers.</span>
                </h2>
                <p className="text-[#4a6a6a] text-lg leading-relaxed mb-8 font-medium">
                  We aren&apos;t just an agency; we&apos;re curators of experiences. Our value
                  proposition is simple:{' '}
                  <strong>We turn properties into destinations.</strong> We apply the same artisanal
                  marketing approach that wins hearts and bookings.
                </p>
                <div className="relative p-8 bg-white sketch-border">
                  <div className="absolute -top-3 -left-3 text-[#ac4131]">
                    <span className="material-symbols-outlined text-4xl">format_quote</span>
                  </div>
                  <p className="italic text-[#39382f] font-bold text-lg leading-relaxed">
                    &quot;SketchBook Rentals helped us double our occupancy in six months by telling
                    our home&apos;s story, not just listing its amenities.&quot;
                  </p>
                  <p className="mt-4 text-sm font-black text-[#ac4131] uppercase tracking-widest">
                    — Martha S., Oceanfront Estates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
