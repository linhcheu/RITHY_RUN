"use client";
import React from 'react';
import { Chewy } from 'next/font/google';
import { useSectionAnimation } from '../hooks/useSectionAnimation';
import { AboutImages } from './AboutImages';

const chewy = Chewy({ weight: ['400'], subsets: ['latin'] });

interface AboutProps { aboutBgVisible: boolean; }

export const About: React.FC<AboutProps> = ({ aboutBgVisible }) => {
  const aboutSection = useSectionAnimation();
  return (
  <section ref={aboutSection[0]} className={`relative w-full min-h-[720px] flex items-center justify-center overflow-hidden anchor-offset ${chewy.className}`} id="about">
      <div className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
        <svg
          className={aboutBgVisible ? 'animate-slideInBgLeft' : ''}
          width="100%"
          height="100%"
          viewBox="0 0 1440 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, opacity: 0.25, zIndex: 0 }}
        >
          {/* ...existing doodles preserved... */}
        </svg>
      </div>
      <div className={`container relative z-10 flex flex-col sm:flex-row items-center justify-center gap-10 h-full ${aboutSection[1] ? 'animate-riseUpSection' : 'opacity-0'}`} style={{ minHeight: '600px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <AboutImages />
        <div className="flex-1 card soft-shadow p-8 sm:p-12 w-full flex flex-col items-center justify-center text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-5">About Me</h2>
          <p className="text-[color:var(--muted)] leading-relaxed text-lg sm:text-xl max-w-2xl">
            I&apos;m a university student majoring in Business, passionate about content creation, digital marketing, and customer engagement. I love building creative campaigns and telling stories that connect with people, while always staying organized and results-focused.
          </p>
        </div>
      </div>
    </section>
  );
};
