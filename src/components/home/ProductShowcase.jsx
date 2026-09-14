import { showcaseApps } from './data';

const layout = [
  { rotate: -10, y: 26, scale: 0.8, z: 10 },
  { rotate: -5, y: 10, scale: 0.9, z: 20 },
  { rotate: 0, y: -14, scale: 1.08, z: 50 },
  { rotate: 5, y: 10, scale: 0.9, z: 20 },
  { rotate: 10, y: 26, scale: 0.8, z: 10 },
];

function Phone({ app, pos }) {
  return (
    <div
      className="w-[19%] shrink-0 transition-transform duration-300 sm:w-[18%]"
      style={{
        transform: `translateY(${pos.y}px) rotate(${pos.rotate}deg) scale(${pos.scale})`,
        zIndex: pos.z,
      }}
    >
      <div className="aspect-[9/19] overflow-hidden rounded-[1.4rem] border-[3px] border-brand-navy bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div
            className={`relative flex-1 bg-cover bg-center ${app.accent}`}
            style={{ backgroundImage: `url(${app.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
            <p className="absolute left-2 top-2 max-w-[85%] text-[9px] font-bold leading-tight text-white drop-shadow sm:text-[10px]">
              {app.name}
            </p>
            <p className="absolute bottom-7 left-2 right-2 text-[7px] font-medium leading-snug text-white drop-shadow sm:text-[8px]">
              {app.tagline}
            </p>
            <span className="absolute bottom-2 left-2 rounded-full bg-brand-orange px-2 py-1 text-[6px] font-semibold text-white sm:text-[7px]">
              {app.cta}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <div className="relative py-8 md:py-0">
      <div
        className="pointer-events-none absolute -right-10 -top-6 h-40 w-[140%] rotate-[18deg] rounded-full bg-gradient-to-r from-brand-orange/0 via-brand-orange/25 to-brand-orange/0 blur-2xl md:h-56"
        aria-hidden="true"
      />
      <div className="relative flex items-center justify-center gap-1.5 px-1">
        {showcaseApps.map((app, i) => (
          <Phone key={app.name} app={app} pos={layout[i]} />
        ))}
      </div>
    </div>
  );
}
