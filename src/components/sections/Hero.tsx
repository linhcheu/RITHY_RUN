"use client";
import Image from 'next/image';
import { Dancing_Script, Chewy } from 'next/font/google';
import React, { useEffect, useRef, useState } from 'react';

const chewy = Chewy({ weight: ['400'], subsets: ['latin'] });
const scriptFont = Dancing_Script({ weight: ['700'], subsets: ['latin'] });

interface HeroProps {
  aboutBgVisible: boolean;
}

export const Hero: React.FC<HeroProps> = ({ aboutBgVisible }) => {
  return (
  <section className="relative w-full section-block overflow-hidden anchor-offset mt-16 sm:mt-16" id="home">
      <svg
        className={aboutBgVisible ? 'animate-slideInBgLeft' : ''}
        width="100%"
        height="100%"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, opacity: 0.25, zIndex: 0 }}
      >
        {/* Decorative elements preserved */}
        {/* ...existing SVG doodles... */}
      </svg>
      <div
        className="container flex flex-col-reverse sm:flex-row items-center sm:items-center sm:justify-center gap-0 sm:gap-16 w-full relative z-10"
        style={{ display: 'flex' }}
        data-aos="fade-up"
      >
        <div
          className="flex-1 flex flex-col justify-center gap-0 text-center sm:text-center pl-2 sm:pl-8"
          style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}
        >
          <div className="relative w-fit mx-auto sm:mx-0">
            <h1
              className={`font-extrabold mb-0 leading-none tracking-tight animate-slideInLeft ${chewy.className}`}
              style={{
                color: '#3B4A8F',
                animationDuration: '4s',
                animationFillMode: 'both',
                lineHeight: '1',
                letterSpacing: '0.12em',
                fontSize: 'clamp(3.5rem, 14vw, 18rem)'
              }}
            >
              RITHY
            </h1>
            <div className="flex items-end gap-2 justify-center sm:justify-start">
              <h1
                className={`font-extrabold mb-0 leading-none tracking-tight animate-slideInLeft ${chewy.className}`}
                style={{
                  color: '#222',
                  animationDuration: '4s',
                  animationFillMode: 'both',
                  animationDelay: '0.2s',
                  lineHeight: '1',
                  letterSpacing: '0.12em',
                  fontSize: 'clamp(3.5rem, 14vw, 18rem)'
                }}
              >
                RUN
              </h1>
              <span
                className={`ml-2 mb-2 text-[1.2rem] xs:text-[1.5rem] sm:text-[2.5rem] text-[#222] ${scriptFont.className} animate-fadeIn`}
                style={{
                  letterSpacing: '2px',
                  animationDuration: '4s',
                  animationFillMode: 'both',
                  animationDelay: '0.4s',
                  position: 'relative',
                  top: '0.5em',
                }}
              >
                2005
              </span>
            </div>
          </div>
          <p
            className={`max-w-2xl mt-8 text-base xs:text-lg sm:text-l leading-relaxed text-[#2C365A] font-normal animate-riseIn ${chewy.className}`}
            style={{
              animationDuration: '1.3s',
              animationFillMode: 'both',
              animationDelay: '0.6s',
              textAlign: 'center',
              letterSpacing: '0.12em',
            }}
          >
            {(() => {
              const text = 'With hard work and passion, I aim to push beyond my limits, overcome challenges, and turn my dreams into reality.';
              return (
                <>
                  {text.split('').map((char, i) =>
                    char === ' ' ? (
                      <span
                        key={i}
                        style={{
                          opacity: 1,
                          marginRight: '0.5em',
                          display: 'inline-block',
                        }}
                      >
                        {' '}
                      </span>
                    ) : (
                      <span
                        key={i}
                        style={{
                          opacity: 0,
                          animation: `typingLetter 0.01s forwards`,
                          animationDelay: `${i * 0.04 + 0.6}s`,
                          display: 'inline-block',
                        }}
                      >
                        {char}
                      </span>
                    )
                  )}
                  <span
                    style={{
                      display: 'inline-block',
                      width: '1ch',
                      height: '1em',
                      background: '#000',
                      marginLeft: '2px',
                      verticalAlign: 'bottom',
                      animation: `blinkCursor 1s steps(2) infinite`,
                      position: 'relative',
                      top: '2px',
                    }}
                  />
                </>
              );
            })()}
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center pt-0 sm:pt-0" style={{ height: '100%' }}>
          <div
            className="relative w-40 h-56 xs:w-56 xs:h-80 sm:w-[30rem] sm:h-[40rem] animate-slideInRight flex items-center justify-center"
            style={{
              animationDuration: '4s',
              animationFillMode: 'both',
              animationDelay: '0.4s',
              top: '-64px',
              position: 'relative',
            }}
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0">
              <div
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  height: '90%',
                  borderRadius: '50%',
                  border: '1px solid #3B4A8F',
                  background: 'transparent',
                  boxShadow: 'none',
                  zIndex: 2,
                }}
              />
            </div>
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/thy.png"
                  alt="Rithy Run profile"
                  fill
                  className="rounded-full object-cover border-0"
                  sizes="320px"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
