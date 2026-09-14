import { ArrowRight } from 'lucide-react';
import ProductShowcase from './ProductShowcase';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-8 pt-4 md:grid-cols-2 md:items-center md:gap-8 md:px-10 md:pb-0 md:pt-8">
        <div>
          <h1 className="font-bricolage text-4xl font-extrabold leading-[1.1] text-brand-navy sm:text-5xl md:text-5xl lg:text-6xl">
            We build <span className="text-brand-orange">software</span> people
            actually want to use.
          </h1>
          <p className="mt-5 max-w-md text-lg text-gray-600">
            Custom platforms designed around how your business actually works.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/10 transition hover:bg-brand-orange-dark"
            >
              View Our Work
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:hello@satoshicomms.com"
              className="inline-flex items-center rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-brand-navy transition hover:border-brand-navy"
            >
              Build With Us
            </a>
          </div>
        </div>

        <div className="md:pl-6">
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
}
