import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import { navLinks } from './data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="relative z-40 bg-brand-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="shrink-0">
          <img src={logo} alt="Satoshi Communications" className="h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brand-navy/80 transition hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden text-right text-[11px] uppercase leading-tight tracking-wider text-gray-500 sm:block">
            <p>Business</p>
            <p>Ideas.</p>
            <p className="font-semibold text-brand-orange">Real Solutions.</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-md p-1 text-brand-navy md:hidden"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-8 bg-white px-6 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <img src={logo} alt="Satoshi Communications" className="h-8 w-auto" />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} className="text-brand-navy" />
              </button>
            </div>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-brand-navy"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hello@satoshicomms.com"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white"
              >
                Get in Touch
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
