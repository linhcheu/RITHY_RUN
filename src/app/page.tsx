"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

// Data model
const socials = [
  { label: "Instagram @1thiee", href: "https://instagram.com/1thiee", icon: "/social-instagram.svg" },
  { label: "Instagram @r.thyk_", href: "https://instagram.com/r.thyk_", icon: "/social-instagram.svg" },
  { label: "TikTok @r.thy", href: "https://www.tiktok.com/@r.thy", icon: "/social-tiktok.svg" },
  { label: "TikTok @thyytime", href: "https://www.tiktok.com/@thyytime", icon: "/social-tiktok.svg" },
  { label: "TikTok @youthclubparagonu", href: "https://www.tiktok.com/@youthclubparagonu", icon: "/social-tiktok.svg" },
];

const skills = [
  "Marketing",
  "Creativity",
  "Content Creation",
  "Video Production",
  "Problem Solving",
  "Customer Service",
  "Communication",
];

export default function Home() {
  const [aboutBgVisible, setAboutBgVisible] = useState(false);

  // Trigger background slide once About section enters viewport
  useEffect(() => {
    const aboutEl = document.getElementById('about');
    if (!aboutEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAboutBgVisible(true); },
      { threshold: 0.25 }
    );
    observer.observe(aboutEl);
    return () => observer.disconnect();
  }, []);

  // Section animation hooks
  // Hooks now live inside individual section components via useSectionAnimation

  return (
    <>
      <Navbar />
      <main className="font-sans relative">
        {/* Smooth grid box background for all sections */}
        <div
          className="fixed inset-0 w-full h-full pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background: `repeating-linear-gradient(90deg, rgba(60,70,120,0.08) 0px, rgba(60,70,120,0.08) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(60,70,120,0.08) 0px, rgba(60,70,120,0.08) 1px, transparent 1px, transparent 80px)`,
            width: '100vw',
            height: '100vh',
            minHeight: '100vh',
            left: 0,
            top: 0,
            zIndex: 0,
            transition: 'background 0.8s cubic-bezier(0.77,0,0.175,1)',
            opacity: 0.7,
            willChange: 'opacity',
            boxSizing: 'border-box',
          }}
        />
        <Hero aboutBgVisible={aboutBgVisible} />

        <About aboutBgVisible={aboutBgVisible} />

        <Skills skills={skills} />
        <Education />
        <Experience />


        <Contact />

      </main>
    </>
  );
}

// (Removed duplicate AboutImages & local hook; components now import shared versions.)
