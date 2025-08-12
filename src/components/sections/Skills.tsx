"use client";
import React, { useState, useEffect } from 'react';
import { FiTrendingUp, FiZap, FiEdit, FiVideo, FiTarget, FiSmile, FiMessageCircle, FiCircle } from 'react-icons/fi';
import { Chewy } from 'next/font/google';
import { useSectionAnimation } from '../hooks/useSectionAnimation';

const chewy = Chewy({ weight: ['400'], subsets: ['latin'] });

interface SkillDetail {
  name: string;
  description: string;
  learned: string;
  confidence: number; // 0-100
  icon: React.ReactNode;
}

const skillDetails: SkillDetail[] = [
  {
    name: "Marketing",
    description: "Strategic planning and campaign execution for brand growth.",
    learned: "Real projects, online courses, industry research.",
    confidence: 90,
    icon: <FiTrendingUp size={32} color="#000000" />,
  },
  {
    name: "Creativity",
    description: "Developing original concepts and solutions for diverse challenges.",
    learned: "Self-taught, collaboration, continuous practice.",
    confidence: 95,
    icon: <FiZap size={32} color="#000000" />,
  },
  {
    name: "Content Creation",
    description: "Producing engaging digital content for various platforms.",
    learned: "Self-taught, social media, iterative improvement.",
    confidence: 92,
    icon: <FiEdit size={32} color="#000000" />,
  },
  {
    name: "Video Production",
    description: "Filming and editing professional video materials.",
    learned: "Online tutorials, hands-on projects, feedback.",
    confidence: 85,
    icon: <FiVideo size={32} color="#000000" />,
  },
  {
    name: "Problem Solving",
    description: "Identifying issues and implementing effective solutions.",
    learned: "Academic training, real-world experience.",
    confidence: 88,
    icon: <FiTarget size={32} color="#000000" />,
  },
  {
    name: "Customer Service",
    description: "Delivering positive client experiences and support.",
    learned: "Work experience, communication workshops.",
    confidence: 80,
    icon: <FiSmile size={32} color="#000000" />,
  },
  {
    name: "Communication",
    description: "Clear and professional verbal and written interaction.",
    learned: "Formal education, team projects, presentations.",
    confidence: 87,
    icon: <FiMessageCircle size={32} color="#000000" />,
  },
];

export const Skills: React.FC = () => {
  const skillsSection = useSectionAnimation();
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Animate rotation, pause when modal is open
  useEffect(() => {
    if (!isRotating) return;
    let frame: number;
    const animate = () => {
      setRotation(r => r + 0.003);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isRotating]);

  // Responsive: set isMobile after mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerSize = isMobile ? 320 : 540;
  const iconSize = isMobile ? 40 : 64;
  const radius = (containerSize / 2) - (iconSize / 2);
  const center = containerSize / 2;

  // Calculate positions for icons around the circle (with rotation)
  // Place icons so their center is exactly on the stroke
  const getIconPosition = (idx: number) => {
    const iconCount = skillDetails.length;
    const angle = (2 * Math.PI * idx) / iconCount + rotation;
    // Center of icon is exactly on the stroke
    const x = center + (radius) * Math.cos(angle) - (iconSize / 2);
    const y = center + (radius) * Math.sin(angle) - (iconSize / 2);
    return { left: `${x}px`, top: `${y}px` };
  };

  const handleIconClick = (skill: SkillDetail) => {
    setSelectedSkill(skill);
    setModalOpen(true);
    setIsRotating(false);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setIsRotating(true);
  };

  return (
    <section ref={skillsSection[0]} className={`container py-20 min-h-[520px] flex flex-col items-center justify-center anchor-offset ${chewy.className}`} id="skills">
      <h2 className="text-2xl sm:text-4xl font-semibold mb-8 text-center" style={{ letterSpacing: '0.05em' }}>Skills</h2>
      <div className={`skills-circle-container ${skillsSection[1] ? 'animate-riseUpSection' : 'opacity-0'}`}
        style={{
          position: 'relative',
          width: `${containerSize}px`,
          height: `${containerSize}px`,
          maxWidth: '98vw',
          maxHeight: '98vw',
          margin: '0 auto',
          borderRadius: '50%',
          background: 'transparent',
          boxShadow: 'none',
          border: '1px solid #6c7bbd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Minimalist black icon in the center */}
        <div style={{
          position: 'absolute',
          left: `${center - iconSize / 2}px`,
          top: `${center - iconSize / 2}px`,
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: '50%',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          fontSize: isMobile ? '1.6rem' : '2.6rem',
          color: '#111',
          boxShadow: 'none',
        }}>
          <FiCircle />
        </div>
        {skillDetails.map((skill, idx) => (
          <button
            key={skill.name}
            className="skill-circle-icon"
            style={{
              position: 'absolute',
              ...getIconPosition(idx),
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              borderRadius: '50%',
              background: 'transparent',
              boxShadow: 'none',
              border: '1px solid #6c7bbd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '1.2rem' : '2rem',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              zIndex: 2,
            }}
            onClick={() => handleIconClick(skill)}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = '0 4px 24px #6c7bbd55'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
            aria-label={skill.name}
          >
            {skill.icon}
          </button>
        ))}
      </div>
      {/* Modal/Panel for skill details */}
      {modalOpen && selectedSkill && (
        <div className="skills-modal-overlay" onClick={handleCloseModal}>
          <div className="skills-modal-panel" onClick={e => e.stopPropagation()}>
            <button className="skills-modal-close" onClick={handleCloseModal} aria-label="Close">×</button>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3B4A8F', marginBottom: '0.7rem' }}>{selectedSkill.name}</h3>
            <div style={{ fontSize: '1.08rem', marginBottom: '0.5rem', color: '#222' }}>{selectedSkill.description}</div>
            <div style={{ fontSize: '0.98rem', color: '#6c7bbd', marginBottom: '0.7rem' }}>Learned: {selectedSkill.learned}</div>
            <div style={{ width: '100%', marginBottom: '0.5rem' }}>
              <div style={{ fontSize: '0.98rem', marginBottom: '0.2rem', color: '#3B4A8F' }}>Confidence</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '70%',
                  height: '8px',
                  background: '#e0e7ff',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${selectedSkill.confidence}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #3B4A8F 60%, #6c7bbd 100%)',
                    borderRadius: '4px',
                    transition: 'width 0.5s',
                  }} />
                </div>
                <span style={{ fontSize: '1.15rem' }}>{selectedSkill.confidence}%</span>
                <span style={{ fontSize: '1.25rem' }}>{selectedSkill.confidence > 90 ? '🔥' : selectedSkill.confidence > 80 ? '😎' : '👍'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .skills-circle-container {
          position: relative;
          width: 540px;
          height: 540px;
          max-width: 98vw;
          max-height: 98vw;
          background: transparent;
          border-radius: 50%;
          border: 1px solid #6c7bbd;
          box-shadow: none;
          transition: opacity 0.7s, transform 1.2s cubic-bezier(.77,0,.175,1);
        }
        .animate-riseUpSection {
          animation-name: riseUpSection;
          animation-timing-function: cubic-bezier(0.77,0,0.175,1);
          animation-duration: 1.2s;
          animation-fill-mode: both;
          animation-delay: 0.2s;
        }
        @keyframes riseUpSection {
          0% { opacity: 0; transform: translateY(40px) scale(1.04); }
          80% { opacity: 1; transform: translateY(-8px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .skill-circle-icon {
          background: transparent;
          border: 1px solid #6c7bbd;
          box-shadow: none;
          transition: transform 0.2s, box-shadow 0.2s;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          font-size: 2rem;
        }
        .skill-circle-icon:hover {
          box-shadow: 0 4px 24px #6c7bbd55;
          transform: scale(1.15);
        }
        @media (max-width: 600px) {
          .skills-circle-container {
            width: 320px;
            height: 320px;
            min-width: 220px;
            min-height: 220px;
          }
          .skill-circle-icon {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
        }
        .skills-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(44,54,90,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeInModal 0.3s;
        }
        .skills-modal-panel {
          background: #fff;
          border-radius: 1.2rem;
          box-shadow: 0 8px 32px rgba(44,54,90,0.18);
          padding: 2.2rem 2.2rem 1.5rem 2.2rem;
          min-width: 320px;
          max-width: 90vw;
          animation: slideUpModal 0.4s cubic-bezier(.77,0,.175,1);
          position: relative;
        }
        .skills-modal-close {
          position: absolute;
          top: 1.1rem;
          right: 1.3rem;
          font-size: 2rem;
          background: none;
          border: none;
          color: #6c7bbd;
          cursor: pointer;
          opacity: 0.7;
          transition: color 0.2s;
        }
        .skills-modal-close:hover {
          color: #3B4A8F;
          opacity: 1;
        }
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUpModal {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}