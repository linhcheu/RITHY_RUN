"use client";
import React, { useMemo } from 'react';
import { Chewy } from 'next/font/google';
import { useSectionAnimation } from '../hooks/useSectionAnimation';
import { FiInstagram, FiFacebook, FiLinkedin, FiPhone, FiMail } from 'react-icons/fi';
import { FaTelegramPlane, FaTiktok } from 'react-icons/fa';

const chewy = Chewy({ weight: ['400'], subsets: ['latin'] });

export const Contact: React.FC = () => {
  const contactSection = useSectionAnimation();
  const nowYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <section ref={contactSection[0]} className={`container py-16 min-h-[720px] flex items-center anchor-offset ${chewy.className}`} id="contact">
      <div className={`w-full ${contactSection[1] ? 'animate-riseUpSection' : 'opacity-0'}`}>
        <div className="card p-6 sm:p-8 soft-shadow" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl" style={{ letterSpacing: '0.05em' }}>Ready to Work With Me?</h2>
          <p className="mt-2 text-[color:var(--muted)]">Let&apos;s collaborate on content, campaigns, or marketing projects.</p>
          <div className="mt-4 grid gap-4 text-xl">
            <div className="flex items-center gap-3">
              <FiPhone className="text-[color:var(--accent)]" />
              <a href="tel:+85585314545" className="underline">+855 85 31 45 45</a>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-[color:var(--accent)]" />
              <a href="mailto:rithyy99@gmail.com" className="underline">rithyy99@gmail.com</a>
            </div>
          </div>
          <form action="/api/contact" method="post" className="mt-6 grid gap-4">
            <input name="name" required placeholder="Your name" className={`rounded-xl border border-gray-200 bg-white/80 px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] transition-all duration-200 shadow-sm placeholder:text-gray-400 ${chewy.className}`} style={{ fontWeight: 200, letterSpacing: '0.04em' }} />
            <input name="email" type="email" required placeholder="Your email" className={`rounded-xl border border-gray-200 bg-white/80 px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] transition-all duration-200 shadow-sm placeholder:text-gray-400 ${chewy.className}`} style={{ fontWeight: 200, letterSpacing: '0.04em' }} />
            <textarea name="message" required placeholder="Tell me about your project" className={`rounded-xl border border-gray-200 bg-white/80 px-5 py-3 min-h-28 text-base focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] transition-all duration-200 shadow-sm placeholder:text-gray-400 resize-none ${chewy.className}`} style={{ fontWeight: 200, letterSpacing: '0.04em' }} />
            <button className={`relative group rounded-xl px-6 py-3 soft-shadow bg-[color:var(--accent)] text-white hover:bg-[color:var(--accent)]/90 transition-all duration-200 w-fit mx-auto shadow-md border-0 ${chewy.className}`} style={{ fontWeight: 200, letterSpacing: '0.04em', boxShadow: '0 2px 12px rgba(44,54,90,0.10)' }}>
              <span className="hidden sm:block absolute left-1/2 -translate-x-1/2 -top-8 text-3xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 pointer-events-none select-none" aria-hidden="true" style={{ zIndex: 10 }}></span>
              Send
            </button>
          </form>
          {/* Social media icons row */}
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://www.tiktok.com/@r.thy" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-[color:var(--accent)] transition text-2xl">
              <FaTiktok />
            </a>
            <a href="https://instagram.com/1thiee" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[color:var(--accent)] transition text-2xl">
              <FiInstagram />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[color:var(--accent)] transition text-2xl">
              <FiFacebook />
            </a>
            <a href="https://t.me/thyytime" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-[color:var(--accent)] transition text-2xl">
              <FaTelegramPlane />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[color:var(--accent)] transition text-2xl">
              <FiLinkedin />
            </a>
          </div>
        </div>
        <footer className={`container text-center text-xs text-[color:var(--muted)] py-8 ${chewy.className}`}>© {nowYear} Rithy Run — All rights reserved.</footer>
      </div>
    </section>
  );
}   