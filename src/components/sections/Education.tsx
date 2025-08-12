"use client";
import React from 'react';
import { Chewy } from 'next/font/google';
import { useSectionAnimation } from '../hooks/useSectionAnimation';

const chewy = Chewy({ weight: ['400'], subsets: ['latin'] });

export const Education: React.FC = () => {
  const educationSection = useSectionAnimation();
  return (
  <section ref={educationSection[0]} className={`container py-20 min-h-[720px] flex items-center anchor-offset ${chewy.className}`} id="education">
      <div className={`w-full ${educationSection[1] ? 'animate-riseUpSection' : 'opacity-0'}`}>
        <h2 className="text-2xl sm:text-4xl font-semibold mb-5" data-aos="fade-up" style={{ letterSpacing: '0.05em' }}>Education</h2>
        <div className="grid gap-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card p-8 sm:p-12 soft-shadow">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <h3 className="font-semibold text-lg sm:text-xl">Sovannaphum High School</h3>
              <span className="text-sm tag px-4 py-2">2012–2023</span>
            </div>
          </div>
          <div className="card p-8 sm:p-12 soft-shadow">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <h3 className="font-semibold text-lg sm:text-xl">Australia Center for Education</h3>
              <span className="text-sm tag px-4 py-2">2022–2024</span>
            </div>
            <p className="mt-3 text-base text-[color:var(--muted)]">IELTS 6.0</p>
          </div>
          <div className="card p-8 sm:p-12 soft-shadow">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <h3 className="font-semibold text-lg sm:text-xl">Paragon International University</h3>
              <span className="text-sm tag px-4 py-2">2024–Present</span>
            </div>
            <p className="mt-3 text-base text-[color:var(--muted)]">Business Administration</p>
          </div>
        </div>
      </div>
    </section>
  );
};
