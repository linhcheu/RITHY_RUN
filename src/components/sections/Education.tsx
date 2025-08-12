"use client";
import React from 'react';
import { Chewy } from 'next/font/google';
import { useSectionAnimation } from '../hooks/useSectionAnimation';

const chewy = Chewy({ weight: ['400'], subsets: ['latin'] });

export const Education: React.FC = () => {
  const educationSection = useSectionAnimation();
  return (
    <section ref={educationSection[0]} className={`container py-20 min-h-[520px] flex items-center anchor-offset ${chewy.className}`} id="education">
      <div className={`w-full ${educationSection[1] ? 'animate-riseUpSection' : 'opacity-0'}`}>
        <h2 className="text-3xl sm:text-5xl mb-12 text-center tracking-tight">Education</h2>
        <div className="education-list mx-auto">
          <div className="education-item">
            <h3 className="text-2xl sm:text-3xl text-center mb-2">Sovannaphum High School</h3>
            <span className="text-lg sm:text-xl text-gray-500 block text-center mb-4">2012–2023</span>
          </div>
          <div className="education-item">
            <h3 className="text-2xl sm:text-3xl text-center mb-2">Australia Center for Education</h3>
            <span className="text-lg sm:text-xl text-gray-500 block text-center mb-2">2022–2024</span>
            <p className="text-base sm:text-lg text-gray-400 text-center">IELTS 6.0</p>
          </div>
          <div className="education-item">
            <h3 className="text-2xl sm:text-3xl text-center mb-2">Paragon International University</h3>
            <span className="text-lg sm:text-xl text-gray-500 block text-center mb-2">2024–Present</span>
            <p className="text-base sm:text-lg text-gray-400 text-center">Business Administration</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .education-list {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }
        .education-item {
          padding: 0.5rem 0;
        }
        @media (max-width: 600px) {
          .education-list {
            gap: 2rem;
          }
          .education-item h3 {
            font-size: 1.3rem;
          }
          .education-item span {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
