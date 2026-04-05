import './Testimonials.css';

const StarRating = ({ colorClass }) => (
  <div className={`flex ${colorClass} gap-1`}>
    {[...Array(5)].map((_, i) => (
      <span key={i} className="material-symbols-outlined">
        star
      </span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 px-8 bg-[#fdf9f1]">
      <div className="max-w-7xl mx-auto text-center mb-20 relative">

        <h2 className="font-headline text-4xl md:text-5xl font-black mb-4 tracking-tight">
          Trusted by Property Visionaries
        </h2>
        <div className="w-32 h-2 bg-[#FF7F6A] mx-auto rounded-full rotate-[-1deg]"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Testimonial 1 */}
        <div className="bg-white p-12 marker-border rounded-2xl relative group hover:rotate-[-1deg] transition-all duration-300">
          <span className="material-symbols-outlined absolute top-4 right-8 text-[#FF7F6A]/20 text-6xl">
            format_quote
          </span>
          <div className="flex items-center gap-4 mb-8">
            <img
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500 -rotate-3"
              alt="Sarah Jenkins"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQNa_hl5BCHM_V_UEmsmaNQYDreUQconkleQerE6JVLHxW9bEPmapbTUIryQh_xIhNuCHqKDvCtoQ3538k8Z6hUXRmTqzxI2I1fC2BfhohidvuTYJOOUaM3BBIYcYU6IxhjQbUjcP1uii4ZKxYFaetkkYZPok3C8xEvekA1XRoKt3eFJz9_2YmDDDFOIRgjUBHDd0jgBRyCWSXL-Uoxc90SF2XNb4N2RvzgvwVJ5VDfH2UZPT9XfMRM7O0xuJCWGKH16JPYZR2ZeU"
            />
            <div>
              <h5 className="font-black text-xl text-[#39382f]">Sarah Jenkins</h5>
              <p className="text-sm font-bold text-secondary uppercase tracking-tight">
                Owner, Alpine Hideaways
              </p>
            </div>
          </div>
          <p className="text-xl text-on-surface/80 italic leading-relaxed font-medium mb-8">
            &quot;SketchBook Rentals didn&apos;t just give us a website; they gave us a brand. Our
            direct bookings went from 10% to 45% in one season. Their creative approach is
            unmatched.&quot;
          </p>
          <StarRating colorClass="text-[#FF7F6A]" />
        </div>
        {/* Testimonial 2 */}
        <div className="bg-white p-12 marker-border rounded-2xl relative group hover:rotate-[1deg] transition-all duration-300">
          <span className="material-symbols-outlined absolute top-4 right-8 text-secondary/20 text-6xl">
            format_quote
          </span>
          <div className="flex items-center gap-4 mb-8">
            <img
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rotate-3"
              alt="Marcus Thorne"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2g7Qwii7VAaa9gUBU5zdc6rGnr6nWi0NiHCbfKXtqQRsqMKitQnNmrh7Nipvl4q2NcbB1CtGeVH0UreeWydCAU-_ifGIxfhzH3dhw_RBqKnvHKPEKN87nDp1bBDPgNg8t8CWGroW22qHXJTNQS45fK51vlh3NNAvs8orxMXD8LncL8O2WLA30tojGSe1BUGtkyytrDRpOA7FGDm0XJxDgalv2hC-UNXulZiPbY_0pxph7Sx7utRBYa4_TkjlN1RPLHhL2tTi0WcU"
            />
            <div>
              <h5 className="font-black text-xl text-[#39382f]">Marcus Thorne</h5>
              <p className="text-sm font-bold text-secondary uppercase tracking-tight">
                CEO, Coastal Stays Portfolio
              </p>
            </div>
          </div>
          <p className="text-xl text-on-surface/80 italic leading-relaxed font-medium mb-8">
            &quot;I was skeptical about SEO for rentals, but the results speak for themselves.
            We&apos;re now ranking #1 for &apos;Boutique Beach Rentals&apos; and saving thousands in
            commissions monthly.&quot;
          </p>
          <StarRating colorClass="text-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
