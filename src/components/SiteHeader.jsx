import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const siteNav = [['Home','/'],['Our Work','/work'],['Why Us','/why-us'],['Process','/process'],['Contact','/contact']];

export default function SiteHeader({ dark = false }) {
  const [open,setOpen]=useState(false);
  return <header className={`site-header ${dark?'header-dark':''}`}>
    <Link className="brand" to="/"><img src={logo} alt="Satoshi Communications"/></Link>
    <nav className="desktop-nav">{siteNav.map(([label,to])=><NavLink className={({isActive})=>isActive?'active':''} to={to} key={label}>{label}</NavLink>)}</nav>
    <div className="motto"><span>BUSINESS<br/>IDEAS.</span><b>REAL SOLUTIONS.</b></div>
    <Link className="header-cta" to="/contact">Start a project <ArrowRight size={17}/></Link>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    {open&&<nav className="mobile-nav">{siteNav.map(([label,to])=><NavLink onClick={()=>setOpen(false)} to={to} key={label}>{label}</NavLink>)}</nav>}
  </header>;
}
