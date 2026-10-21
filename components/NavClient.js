'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavClient({ navItems, logoUrl }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="brand" style={{ textDecoration: 'none', color: 'inherit' }}>
          {logoUrl ? (
            <img src={logoUrl} alt="لوگو" style={{ height: '28px', width: 'auto', borderRadius: '4px' }} />
          ) : (
            <span className="dot"></span>
          )}
          نیکو پلیمر اروند
        </Link>
        <div className="navlinks">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
        <button className="nav-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="باز کردن منو">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
        ))}
      </div>
    </>
  );
}
