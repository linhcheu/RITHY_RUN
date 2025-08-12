"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Chewy } from 'next/font/google';
import { useSectionAnimation } from '../hooks/useSectionAnimation';

const chewy = Chewy({ weight: ['400'], subsets: ['latin'] });

interface Social { label: string; href: string; icon: string; }
interface SocialsProps { socials: Social[]; }

export const Socials: React.FC<SocialsProps> = ({ socials }) => {
  const socialsSection = useSectionAnimation();
  return (
  <section ref={socialsSection[0]} className={`container py-20 min-h-[720px] flex items-center anchor-offset ${chewy.className}`} id="socials">
      <div className={`w-full ${socialsSection[1] ? 'animate-riseUpSection' : 'opacity-0'}`}>
        <h2 className="text-2xl sm:text-4xl font-semibold mb-5" data-aos="fade-up" style={{ letterSpacing: '0.05em' }}>Socials</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
          {socials.map((s) => (
            <Link key={s.label} href={s.href} className="card p-8 flex items-center gap-4 hover:translate-y-[-2px] transition soft-shadow">
              <Image src={s.icon} alt="social" width={28} height={28} />
              <span className="text-lg">{s.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
