import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';

const content={
  '/why-us':['WHY SATOSHI','More than developers.','Your business partner.','We learn how your business works, then turn that understanding into thoughtful, dependable software built for real results.'],
  '/process':['OUR PROCESS','A simple process.','From idea to impact.','Discover, scope, design, develop and launch—with clear decisions, honest communication and no mystery in the middle.'],
  '/contact':['START A PROJECT','Your idea deserves','a beautiful solution.','Tell us what you want to improve, automate or bring to life. We’ll help you shape the next step.'],
};
export default function InfoPage(){const c=content[useLocation().pathname]||content['/contact'];return <div className="info-page"><SiteHeader/><main><span className="eyebrow">{c[0]}</span><h1>{c[1]}<br/><em>{c[2]}</em></h1><p>{c[3]}</p><a className="button primary" href="mailto:hello@satoshicomms.com">Talk to us <ArrowRight/></a><Link className="text-link" to="/work">Explore our work</Link></main></div>}
