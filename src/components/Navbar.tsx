"use client";

import { useEffect, useState, useRef } from "react";
import { Chewy } from "next/font/google";
import { FiHome, FiUser, FiFeather, FiBriefcase, FiBook, FiFolder, FiMessageCircle, FiMail } from 'react-icons/fi';

const chewy = Chewy({
  subsets: ["latin"],
  weight: "400"
});

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

// Replace emoji icons with React Icons for each nav item, keeping Gen Z vibe and hover label
const navIcons = [
  { icon: <FiHome size={20} />, label: 'Home' },
  { icon: <FiUser size={20} />, label: 'About' },
  { icon: <FiFeather size={20} />, label: 'Skills' },
  { icon: <FiBriefcase size={20} />, label: 'Experience' },
  { icon: <FiBook size={20} />, label: 'Education' },
  { icon: <FiFolder size={20} />, label: 'Portfolio' },
  { icon: <FiMail size={20} />, label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>('down');
  const prevScrollY = useRef(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handler = () => {
      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.href.replace("#", ""));
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      let idx = offsets.findIndex((top) => top > 0);
      // If scrolled to bottom, highlight last section (Contact)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        idx = navItems.length;
      }
      setActive(navItems[Math.max(0, idx - 1)].href.replace("#", ""));

      setScrolled(window.scrollY > 10);
      setScrollDir(window.scrollY > prevScrollY.current ? 'down' : 'up');
      prevScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // track mobile breakpoint
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!sidebarOpen) return;
    function handleClick(e: MouseEvent) {
      if (sidebarRef.current && e.target instanceof Node && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [sidebarOpen]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [sidebarOpen]);

  // Close on Escape
  useEffect(() => {
    if (!sidebarOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [sidebarOpen]);

  return (
    <>
    <nav
      className={`fixed left-0 right-0 z-30 transition-all duration-300 ease-in-out ${scrolled ? "bg-white/80" : "bg-transparent"}`}
      style={{
        top: scrolled ? "16px" : "24px",
        width: isMobile ? (scrolled ? "82%" : "88%") : (scrolled ? "30%" : "40%"),
        margin: "0 auto",
        borderRadius: "18px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(44,54,90,0.18)",
        border: scrolled ? "1px solid rgba(44,54,90,0.18)" : "none",
        overflow: "hidden",
      }}
    >
      <div
        className="flex items-center w-full py-2 sm:py-3"
        style={{
          transition:
            scrollDir === 'down'
              ? "transform 4s cubic-bezier(.77,0,.175,1), padding 0.5s cubic-bezier(.77,0,.175,1)"
              : "transform 4s cubic-bezier(.77,0,.175,1), padding 0.5s cubic-bezier(.77,0,.175,1)",
          paddingTop: scrolled ? "8px" : "18px",
          paddingBottom: scrolled ? "8px" : "18px",
          transform: scrolled ? "scale(0.96)" : "scale(1)",
        }}
      >
        <a href="#home">
          <span className={`font-bold text-[color:var(--accent)] pl-8 ${chewy.className}`}
            style={{ fontSize: isMobile ? (scrolled ? "0.95rem" : "1.45rem") : (scrolled ? "0.95rem" : "1.45rem"), transition: "font-size 0.3s cubic-bezier(.77,0,.175,1)" }}>
            1hy!
          </span>
        </a>
        {/* Desktop nav icons */}
        <div className="flex-1 flex justify-center">
          <ul className={`hidden md:flex gap-2 sm:gap-4 flex-wrap ${chewy.className}`}
            style={{ fontSize: scrolled ? "0.85rem" : "1.1rem", transition: "font-size 0.3s cubic-bezier(.77,0,.175,1)" }}>
            {navItems.map((item, idx) => (
              <li key={item.href} className="relative group flex flex-col items-center"
                style={{
                  transition: 'transform 0.5s cubic-bezier(.77,0,.175,1), opacity 0.5s cubic-bezier(.77,0,.175,1)',
                  transform: scrollDir === 'up' ? 'translateY(0)' : 'translateY(0)',
                  opacity: 1,
                }}
              >
                <a
                  href={item.href}
                  className={`px-3 py-1 rounded-full font-medium transition hover:bg-[color:var(--card)] hover:text-[color:var(--accent)] flex flex-col items-center ${active === item.href.replace("#", "") ? "bg-[color:var(--card)] text-[color:var(--accent)]" : "text-[color:var(--muted)]"}`}
                  style={{ padding: scrolled ? "4px 10px" : "8px 16px", transition: 'padding 0.3s cubic-bezier(.77,0,.175,1)' }}
                  onClick={() => setActive(item.href.replace('#', ''))}
                >
                  <span style={{ fontSize: '1em', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.3s cubic-bezier(.77,0,.175,1)' }}>{navIcons[idx].icon}</span>
                  <span
                    className="absolute left-1/2 -translate-x-1/2 mt-7 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      pointerEvents: 'none',
                      fontSize: '0.8em',
                      color: '#222',
                      background: 'rgba(255,255,255,0.85)',
                      borderRadius: '8px',
                      padding: '2px 8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                      transition: 'font-size 0.3s cubic-bezier(.77,0,.175,1)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.fontSize = '0.6em')}
                    onMouseLeave={e => (e.currentTarget.style.fontSize = '0.7em')}
                  >
                    {navIcons[idx].label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu icon */}
        <div className="relative flex items-center justify-center" style={{ width: '44px', height: '44px' }}>
          {sidebarOpen && (
            <div
              className="absolute left-0 top-0 w-full h-full rounded-lg transition-all duration-400 z-10"
              style={{
                pointerEvents: 'none',
                opacity: sidebarOpen ? 1 : 0,
                background: 'rgba(245,245,255,0.55)',
                boxShadow: '0 0 12px 2px rgba(180,180,255,0.18), 0 2px 12px 0 rgba(44,54,90,0.07)',
                border: 0,
              }}
            />
          )}
          <button
            aria-label="Open menu"
            className="md:hidden flex flex-col items-center justify-center"
            onClick={() => setSidebarOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', zIndex: 20, width: '36px', height: '36px' }}
          >
            <span style={{ display: 'block', width: '16px', height: '3px', background: '#222', borderRadius: '2px', marginBottom: '2px' }}></span>
            <span style={{ display: 'block', width: '16px', height: '3px', background: '#222', borderRadius: '2px', marginBottom: '2px' }}></span>
            <span style={{ display: 'block', width: '16px', height: '3px', background: '#222', borderRadius: '2px' }}></span>

          </button>
        </div>
      </div>
    </nav>
    {/* Overlay for sidebar (outside nav to avoid clipping) */}
    {sidebarOpen && (
      <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
    )}
    {/* Mobile sidebar menu */}
    <div
      ref={sidebarRef}
      className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      style={{ borderTopLeftRadius: '18px', borderBottomLeftRadius: '18px', paddingTop: '32px' }}
    >
      {/* X close button */}
      <button
        aria-label="Close menu"
        className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/70 border border-gray-200 shadow-sm hover:bg-white/90 transition-all duration-200 focus:outline-none"
        onClick={() => setSidebarOpen(false)}
        style={{ cursor: 'pointer', zIndex: 10 }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="4.5" y1="4.5" x2="13.5" y2="13.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="13.5" y1="4.5" x2="4.5" y2="13.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <ul className="flex flex-col gap-6 mt-12 px-8 overflow-y-auto h-full pb-10">
        {navItems.map((item, idx) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`flex flex-col items-center text-[color:var(--muted)] hover:text-[color:var(--accent)] transition`}
              onClick={() => setSidebarOpen(false)}
            >
              <span style={{ fontSize: '1.3em', marginBottom: '4px' }}>{navIcons[idx]?.icon}</span>
              <span className="text-xs" style={{ fontSize: '0.9em' }}>{navIcons[idx]?.label ?? item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
