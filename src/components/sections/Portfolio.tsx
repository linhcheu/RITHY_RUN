"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Chewy } from 'next/font/google';
import { useSectionAnimation } from '../hooks/useSectionAnimation';

const chewy = Chewy({ weight: ['400'], subsets: ['latin'] });

export const Portfolio: React.FC = () => {
  const portfolioSection = useSectionAnimation();
  return (
  <section ref={portfolioSection[0]} className={`container py-20 min-h-[720px] flex items-center anchor-offset ${chewy.className}`} id="portfolio">
      <div className={`w-full ${portfolioSection[1] ? 'animate-riseUpSection' : 'opacity-0'}`}>
        <h2 className="text-2xl sm:text-4xl font-semibold mb-5" data-aos="fade-up" style={{ letterSpacing: '0.05em' }}>Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card overflow-hidden soft-shadow p-8 sm:p-12">
            <div className="relative aspect-video">
              <Image src="/thumb-pyc.svg" alt="Paragon Youth Club" fill className="object-cover" />
            </div>
            <div className="pt-6">
              <h3 className="font-medium text-lg sm:text-xl">Paragon Youth Club Socials</h3>
              <div className="mt-3 flex gap-3 flex-wrap">
                <Link href="https://www.tiktok.com/@youthclubparagonu" className="tag px-4 py-2 text-base hover:opacity-90">Watch on TikTok</Link>
                <Link href="https://instagram.com/youthclubparagonu" className="tag px-4 py-2 text-base hover:opacity-90">View on Instagram</Link>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden soft-shadow p-8 sm:p-12">
            <div className="relative aspect-video">
              <Image src="/thumb-munchiee.svg" alt="Munchiee x Speedy" fill className="object-cover" />
            </div>
            <div className="pt-6">
              <h3 className="font-medium text-lg sm:text-xl">Munchiee x Speedy content</h3>
              <div className="mt-3 flex gap-3 flex-wrap">
                <Link href="https://www.tiktok.com/" className="tag px-4 py-2 text-base hover:opacity-90">Watch on TikTok</Link>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden soft-shadow p-8 sm:p-12">
            <div className="relative aspect-video">
              <Image src="/thumb-redgrill.svg" alt="RedGrill trailer" fill className="object-cover" />
            </div>
            <div className="pt-6">
              <h3 className="font-medium text-lg sm:text-xl">RedGrill trailer video</h3>
              <div className="mt-3 flex gap-3 flex-wrap">
                <Link href="https://www.tiktok.com/" className="tag px-4 py-2 text-base hover:opacity-90">Watch on TikTok</Link>
                <Link href="https://instagram.com/" className="tag px-4 py-2 text-base hover:opacity-90">View on Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
