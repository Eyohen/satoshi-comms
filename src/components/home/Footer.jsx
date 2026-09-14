export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          Satoshi Communications
        </p>
        <p className="mt-1 text-sm text-gray-400">We build custom software.</p>
        <a
          href="mailto:hello@satoshicomms.com"
          className="mt-4 inline-block text-sm font-medium text-brand-orange hover:underline"
        >
          hello@satoshicomms.com
        </a>
      </div>
    </footer>
  );
}
