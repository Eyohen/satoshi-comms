import { Clock, TrendingUp, Users, Heart } from 'lucide-react';
import { highlights } from './data';

const icons = { Clock, TrendingUp, Users, Heart };

export default function Highlights() {
  return (
    <section id="highlights" className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="grid grid-cols-2 gap-y-8 md:flex md:items-start md:justify-between md:divide-x md:divide-gray-200">
          {highlights.map(({ icon, label }) => {
            const Icon = icons[icon];
            return (
              <div key={label} className="flex flex-col items-center gap-2 text-center md:flex-1 md:px-4">
                <Icon className="text-brand-orange" size={28} strokeWidth={1.75} />
                <p className="text-sm font-medium text-brand-navy">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
