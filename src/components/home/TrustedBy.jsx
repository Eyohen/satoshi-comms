import { trustedCategories } from './data';

export default function TrustedBy() {
  return (
    <section id="work" className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-4 md:px-10 md:pb-24">
        <div className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5 md:p-10">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-6 w-1 shrink-0 rounded-full bg-brand-orange md:h-7" />
            <h2 className="text-xl font-semibold leading-snug text-brand-navy md:text-2xl">
              Trusted by forward-thinking businesses in Nigeria and beyond.
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap justify-between gap-x-4 gap-y-6 md:justify-start md:gap-x-12">
            {trustedCategories.map((cat) => (
              <div key={cat.label} className="flex w-16 flex-col items-center gap-2 md:w-20">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-white md:h-20 md:w-20"
                />
                <p className="text-xs font-medium text-gray-600 md:text-sm">{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
