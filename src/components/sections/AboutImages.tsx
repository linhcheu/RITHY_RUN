"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const AboutImages: React.FC = () => {
  const images = ['/images/t3.jpg', '/images/t1.jpg', '/images/t2.jpg'];
  const [frontIdx, setFrontIdx] = useState(0);
  const [showRise, setShowRise] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowRise(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 flex justify-center items-center min-h-[320px] relative" style={{ minWidth: '260px', maxWidth: '340px' }}>
      {images.map((src, i) => {
        const isFront = i === frontIdx;
        const z = isFront ? 30 : 20 + i;
        const baseRotates = [-8, 10, -14];
        const rotate = baseRotates[i] + (isFront ? 0 : (i - frontIdx) * 8);
        const scale = isFront ? 1.08 : 0.92;
        const animationClass = showRise ? 'animate-riseIn' : '';
        return (
          <div
            key={src}
            onClick={() => setFrontIdx(i)}
            className={`about-img ${isFront ? 'about-img-front' : 'about-img-back'} ${animationClass}`}
            style={{
              animationDelay: `${i * 0.18 + 0.2}s`,
              position: 'absolute',
              left: `${40 * i}px`,
              top: `${20 * i}px`,
              zIndex: z,
              transform: `scale(${scale}) rotate(${rotate}deg)`,
              boxShadow: isFront ? '0 8px 32px rgba(44,54,90,0.18)' : '0 2px 12px rgba(44,54,90,0.10)',
              cursor: 'pointer',
              transition:
                'transform 0.5s cubic-bezier(0.77,0,0.175,1), box-shadow 0.5s cubic-bezier(0.77,0,0.175,1), border 0.5s cubic-bezier(0.77,0,0.175,1), opacity 0.5s cubic-bezier(0.77,0,0.175,1)',
              borderRadius: '18px',
              width: '220px',
              height: '300px',
              border: isFront ? '1px solid #3B4A8F' : '1px solid #e0e0e0',
              opacity: isFront ? 1 : 0.85,
              overflow: 'hidden',
            }}
          >
            <Image
              src={src}
              alt={`About ${i + 1}`}
              fill
              sizes="(max-width: 768px) 180px, 220px"
              style={{ objectFit: 'cover' }}
              priority={i === 0}
            />
          </div>
        );
      })}
    </div>
  );
};
