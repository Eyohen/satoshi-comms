const unsplash = (id, w) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const showcaseApps = [
  {
    name: 'Satoshi Kitchen',
    tagline: 'Quality Appliances for a Better Home.',
    cta: 'Shop Now',
    accent: 'bg-white',
    image: unsplash('1570222094114-d054a817e56b', 400),
  },
  {
    name: 'Jeets & Cream',
    tagline: 'Sweet Moments Made Simple.',
    cta: 'Order Now',
    accent: 'bg-amber-50',
    image: unsplash('1578985545062-69928b1d9587', 400),
  },
  {
    name: 'Debs Couture',
    tagline: 'Custom Made for You. Your Style. Our Craft.',
    cta: 'Place an Order',
    accent: 'bg-orange-50',
    image: unsplash('1531123897727-8f129e1688ce', 500),
    featured: true,
  },
  {
    name: 'Loving & Hair',
    tagline: 'Book Your Next Appointment.',
    cta: 'Book Now',
    accent: 'bg-pink-50',
    image: unsplash('1522337360788-8b13dee7a37e', 400),
  },
  {
    name: 'Osas Merana',
    tagline: 'Create. Share. Grow.',
    cta: 'Join Now',
    accent: 'bg-neutral-100',
    image: unsplash('1506794778202-cad84cf45f1d', 400),
  },
];

export const highlights = [
  { icon: 'Clock', label: 'Save Time' },
  { icon: 'TrendingUp', label: 'Work Smarter' },
  { icon: 'Users', label: 'Grow Faster' },
  { icon: 'Heart', label: 'Happier Customers' },
];

export const trustedCategories = [
  { label: 'Fashion', image: unsplash('1573496359142-b8d87734a5a2', 160) },
  { label: 'Food', image: unsplash('1508214751196-bcfd4ca60f91', 160) },
  { label: 'Beauty', image: unsplash('1580489944761-15a19d654956', 160) },
  { label: 'Retail', image: unsplash('1500648767791-00dcc994a43e', 160) },
  { label: 'Creator', image: unsplash('1489424731084-a5d8b219a5bb', 160) },
];

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Our Work', href: '#work' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Contact', href: '#contact' },
];
