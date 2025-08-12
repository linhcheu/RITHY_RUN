"use client";
import React, { useState } from 'react';
import { Chewy } from 'next/font/google';
import { useSectionAnimation } from '../hooks/useSectionAnimation';
import { FiPlus, FiMinus, FiBriefcase, FiChevronDown } from 'react-icons/fi';

const chewy = Chewy({ weight: ['400'], subsets: ['latin'] });

// Add image property to each experience
const experiences = [
  {
    title: 'Munchie X Speedy',
    company: '',
    date: 'January 2024 - Present',
    role: 'Part-Time worker (Saturday and Sunday)',
    positions: [
      {
        title: 'Beauty Assistant',
        description: 'Work closely to customers, discuss over skin types and recommend products.'
      },
      {
        title: 'Stock Controller',
        description: 'Ensures that inventory levels are maintained and correct records are kept.'
      },
      {
        title: 'Order controller',
        description: 'Processes and manages customer orders, writes their order to Excel lists, and prepares products for delivery.'
      },
    ],
    icon: <FiBriefcase />,
    image: '/images/munchie.jpg',
    images: [
      '/images/munchie1.jpg',
      '/images/munchie2.jpg',
      '/images/munchie3.jpg',
    ],
    link: 'https://www.tiktok.com/@youthclubparagonu?_t=ZS-8uAlWgMd1yD&_r=1',
  },
  {
    title: 'Paragon Youth Club',
    company: '',
    date: 'January 2024 - Present',
    positions: [
      {
        title: 'Content Creator',
        description: 'Involves producing and sharing digital content to engage and grow an audience, and is tasked with ideation and research, production and editing, and content management of that content across numerous platforms.'
      },
    ],
    icon: <FiBriefcase />,
    image: '/images/pyc2.jpg',
    images: [
      '/images/pyc1.jpg',
      '/images/pyc3.jpg',
      '/images/pyc4.jpg',
      '/images/pyc5.jpg',
      '/images/pyc6.jpg',
    ],
    link: 'https://www.tiktok.com/@youthclubparagonu?_t=ZS-8uAlWgMd1yD&_r=1',
  },
  {
    title: 'Red Grill Korean BBQ',
    company: 'Freelance',
    date: '',
    positions: [
      {
        title: 'Content Creator',
        description: 'Participate in brainstorming ideas, drafting concepts, producing, and finalizing trailer videos and the grand opening video for the restaurant.'
      },
    ],
    icon: <FiBriefcase />,
    image: '/images/red1.jpg',
    images: [
      '/images/red2.jpg',
    ],
    link: 'https://drive.google.com/drive/folders/1NHnIhlgiZX7DAhkUENDG_tuMF_EUtc6Q?usp=sharing',
  },
  {
    title: 'ISEOULU',
    company: 'Freelance Modeling',
    date: '',
    positions: [
      {
        title: 'Model',
        description: 'Freelance modeling for ISEOULU, participating in photoshoots and promotional events.'
      },
    ],
    icon: <FiBriefcase />,
    image: '/images/isu2.jpg',
    images: [
      '/images/isu1.jpg',
      '/images/isu3.jpg',
    ],
    link: null,
  },
];
export const ExperienceSection = () => {
  const experienceSection = useSectionAnimation();
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      ref={experienceSection[0]}
      className={`container py-20 min-h-[720px] flex flex-col items-center anchor-offset ${chewy.className} ${experienceSection[1] ? 'animate-riseUpSection' : 'opacity-0'}`}
      id="experience"
    >
      <h2 className="text-3xl sm:text-4xl mb-8 text-center">Experience</h2>
      <div className="container mx-auto">
        <div className="experience-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.8rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2.5rem 1.5rem',
          }}>
          {experiences.map((exp, idx) => (
            <div className="experience-card flex items-center" key={exp.title}>
              {/* Image on left for even, right for odd */}
              {idx % 2 === 0 ? (
                <img
                  src={exp.image}
                  alt={exp.title + ' image'}
                  className="experience-image-square mr-6"
                />
              ) : null}
              <div className="flex-1 flex flex-col justify-start" style={{ minHeight: '180px' }}>
                <div className="flex justify-between items-start" style={{ alignItems: 'flex-start' }}>
                  <div>
                    <h3 className="text-lg mt-0">{exp.title}</h3>
                    <p className="text-gray-500 text-sm">{exp.company}</p>
                  </div>
                  <button
                    aria-label={openIndexes.includes(idx) ? 'Collapse' : 'Expand'}
                    onClick={() => handleToggle(idx)}
                    className={`transition-transform duration-300 ${openIndexes.includes(idx) ? 'rotate-180' : ''}`}
                  >
                    <FiChevronDown />
                  </button>
                </div>
                <div
                  className={`experience-dropdown-container ${openIndexes.includes(idx) ? 'open' : ''}`}
                  style={{ overflow: 'hidden', transition: 'max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s', maxHeight: openIndexes.includes(idx) ? '400px' : '0', opacity: openIndexes.includes(idx) ? 1 : 0 }}
                >
                  {openIndexes.includes(idx) && (
                    <div className="experience-dropdown mt-3">
                      <ul className="mb-3">
                        {exp.positions && exp.positions.map((pos, i) => (
                          <li key={i} className="mb-2">
                            <b>{pos.title}</b>: {pos.description}
                          </li>
                        ))}
                      </ul>
                      {/* Show extra images if available */}
                      {exp.images && exp.images.length > 0 && (
                        <div className="experience-extra-images mt-4 flex flex-wrap gap-3">
                          {exp.images.map((img, i) => (
                            <img
                              key={img}
                              src={img}
                              alt={exp.title + ' extra image ' + (i + 1)}
                              className="experience-image-extra"
                            />
                          ))}
                        </div>
                      )}
                      {/* View Content Link */}
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-5 px-4 py-2 rounded-lg bg-white text-[#000000] font-light text-sm shadow hover:bg-[#000000] hover:text-white transition-colors"
                          >
                            View Content
                          </a>
                        )}
                    </div>
                  )}
                </div>
              </div>
              {idx % 2 !== 0 ? (
                <img
                  src={exp.image}
                  alt={exp.title + ' image'}
                  className="experience-image-square ml-6"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .experience-grid {
          display: grid;
          grid-template-columns: 1fr !important;
          gap: 2.2rem;
          max-width: 900px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem;
        }
        .experience-card {
          background: #fff;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.04);
          border-radius: 1.2rem;
          padding: 2.2rem 1.5rem;
          min-width: 0;
          width: 100%;
          box-sizing: border-box;
          font-size: 1.08rem;
          display: flex;
          align-items: center;
          transition: box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }
        .experience-card::before {
          content: '';
          position: absolute;
          top: -30px;
          left: -30px;
          width: 120px;
          height: 120px;
          background: url('/doodle1.svg') no-repeat center/contain;
          opacity: 0.18;
          z-index: 0;
        }
        .experience-card::after {
          content: '';
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 100px;
          height: 100px;
          background: url('/doodle1.svg') no-repeat center/contain;
          opacity: 0.15;
          z-index: 0;
        }
        .experience-card > * {
          position: relative;
          z-index: 1;
        }
        .experience-image-square {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 1rem;
          background: #f6f6f6;
          flex-shrink: 0;
          display: block;
          border: 1.5px solid #eaeaea;
        }
        .experience-dropdown {
          padding: 1.5rem 1.2rem;
          border-radius: 1rem;
          font-size: 1.02rem;
          background: #fafbfc;
          box-shadow: 0 1px 8px 0 rgba(0,0,0,0.03);
          margin-top: 0.5rem;
        }
        .experience-dropdown ul {
          padding-left: 1.2rem;
        }
        .experience-dropdown li {
          margin-bottom: 0.7rem;
          color: #222;
          font-weight: 200;
          letter-spacing: 0.01em;
        }
        .experience-extra-images {
          margin-top: 1.2rem;
          gap: 0.7rem;
        }
        .experience-image-extra {
          width: 90px;
          height: 90px;
          object-fit: cover;
          border-radius: 0.7rem;
          background: #f6f6f6;
          border: 1.5px solid #eaeaea;
          display: block;
        }
        .experience-card button {
          background: #f6f6f6;
          border: none;
          outline: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 6px 0 rgba(0,0,0,0.04);
          transition: background 0.2s, box-shadow 0.2s;
          color: #222;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .experience-card button:hover {
          background: #eaeaea;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
        }
        .experience-card button:active {
          background: #e0e0e0;
        }
        @media (max-width: 900px) {
          .experience-grid {
            max-width: 100%;
            padding: 1.2rem 0.5rem;
          }
          .experience-image-square {
            width: 120px;
            height: 120px;
          }
          .experience-card {
            padding: 1.5rem 1rem;
            font-size: 1rem;
          }
          .experience-dropdown {
            padding: 1.2rem 0.7rem;
            font-size: 0.98rem;
          }
          .experience-image-extra {
            width: 60px;
            height: 60px;
          }
        }
        @media (max-width: 600px) {
          .experience-grid {
            gap: 1.2rem;
          }
          .experience-card {
            padding: 1.2rem 0.7rem;
            border-radius: 1rem;
            font-size: 0.98rem;
          }
          .experience-image-square {
            width: 80px;
            height: 80px;
          }
          .experience-dropdown {
            padding: 1rem 0.5rem;
            border-radius: 0.7rem;
            font-size: 0.95rem;
          }
          .experience-image-extra {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export { ExperienceSection as Experience };
