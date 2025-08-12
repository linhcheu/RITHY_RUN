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
    image: '/images/exp1.jpg',
    images: [
      '/images/pyc1.jpg',
      '/images/pyc3.jpg',
      '/images/pyc4.jpg',
      '/images/py.jpg',
      '/images/exp1_5.jpg',
    ],
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
    image: '/images/exp2.jpg',
    images: [
      '/images/exp2_1.jpg',
    ],
  },
  {
    title: 'Freelance Modeling',
    company: 'ISEOULU',
    date: '',
    positions: [
      {
        title: 'Model',
        description: 'Freelance modeling for ISEOULU, participating in photoshoots and promotional events.'
      },
    ],
    icon: <FiBriefcase />,
    image: '/images/iseoulu.jpg',
    images: [
      '/images/iseoulu1.jpg',
      '/images/iseoulu2.jpg',
    ],
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
    <section ref={experienceSection[0]} className={`container py-20 min-h-[720px] flex flex-col items-center anchor-offset ${chewy.className} ${experienceSection[1] ? 'animate-riseUpSection' : 'opacity-0'}`} id="experience">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Experience</h2>
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
          {experiences.map((exp, idx) => {
            const isFreelanceModeling = exp.title === 'Freelance Modeling';
            return (
              <div className="experience-card flex items-center" key={exp.title}>
                {/* Mobile: Freelance Modeling image on top */}
                {isFreelanceModeling ? (
                  <>
                    <span className="block sm:hidden w-full">
                      <img
                        src={exp.image}
                        alt={exp.title + ' image'}
                        className="experience-image-square mb-3 mx-auto"
                      />
                    </span>
                    <span className="hidden sm:block">
                      {idx % 2 === 0 ? (
                        <img
                          src={exp.image}
                          alt={exp.title + ' image'}
                          className="experience-image-square mr-6"
                        />
                      ) : (
                        <img
                          src={exp.image}
                          alt={exp.title + ' image'}
                          className="experience-image-square ml-6"
                        />
                      )}
                    </span>
                  </>
                ) : (
                  <>
                    {idx % 2 === 0 ? (
                      <img
                        src={exp.image}
                        alt={exp.title + ' image'}
                        className="experience-image-square mr-6"
                      />
                    ) : null}
                  </>
                )}
                <div className="flex-1 flex flex-col justify-start w-full" style={{ minHeight: '180px' }}>
                  <div className="flex justify-between items-start w-full">
                    <div>
                      <h3 className="font-semibold text-lg mt-0">{exp.title}</h3>
                      <p className="text-gray-500 text-sm">{exp.company}</p>
                    </div>
                    <button
                      aria-label={openIndexes.includes(idx) ? 'Collapse' : 'Expand'}
                      onClick={() => handleToggle(idx)}
                      className={`transition-transform duration-300 ${openIndexes.includes(idx) ? 'rotate-180' : ''} experience-expand-btn`}
                      style={{ alignSelf: 'flex-start' }}
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
                      </div>
                    )}
                  </div>
                </div>
                {/* For non-mobile, right side image for odd cards except Freelance Modeling */}
                {!isFreelanceModeling && idx % 2 !== 0 ? (
                  <img
                    src={exp.image}
                    alt={exp.title + ' image'}
                    className="experience-image-square ml-6"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .experience-grid {
          display: grid;
          grid-template-columns: 1fr !important;
          gap: 2.8rem;
          max-width: 900px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem;
        }
        .experience-card {
          padding: 2.8rem 2rem;
          border-radius: 1.5rem;
          min-width: 0;
          width: 100%;
          box-sizing: border-box;
          font-size: 1.22rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .experience-image-square {
          width: 220px;
          height: 220px;
          object-fit: cover;
          border-radius: 1.2rem;
          background: #f3f3f3;
          flex-shrink: 0;
          display: block;
        }
        .experience-dropdown {
          padding: 2rem 1.5rem;
          border-radius: 1.2rem;
          font-size: 1.12rem;
          width: 100%;
          box-sizing: border-box;
        }
        .experience-image-extra {
          width: 110px;
          height: 110px;
          object-fit: cover;
          border-radius: 0.7rem;
          background: #f3f3f3;
          display: block;
        }
        .experience-expand-btn {
          margin-left: 0.5rem;
        }
        @media (max-width: 600px) {
          .experience-expand-btn {
            position: absolute;
            right: 1rem;
            top: 1.2rem;
            margin-left: 0;
          }
          .experience-card {
            position: relative;
          }
        }
        @media (max-width: 900px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            max-width: 100%;
            padding: 1.2rem 0.5rem;
          }
          .experience-image-square {
            width: 150px;
            height: 150px;
          }
          .experience-card {
            padding: 1.5rem 1rem;
            font-size: 1.08rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .experience-dropdown {
            padding: 1.2rem 0.7rem;
            font-size: 1rem;
          }
          .experience-image-extra {
            width: 80px;
            height: 80px;
          }
        }
        @media (max-width: 600px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem;
          }
          .experience-card {
            padding: 1.2rem 0.7rem;
            border-radius: 1rem;
            min-width: 0;
            width: 100%;
            box-sizing: border-box;
            font-size: 1rem;
            flex-direction: column;
            align-items: flex-start;
          }
          .experience-image-square {
            width: 100px;
            height: 100px;
            margin: 0 0 1rem 0 !important;
          }
          .experience-dropdown {
            padding: 1rem 0.5rem;
            border-radius: 0.7rem;
            font-size: 0.98rem;
            width: 100%;
          }
          .experience-image-extra {
            width: 55px;
            height: 55px;
          }
        }
      `}</style>
    </section>
  );
};

export { ExperienceSection as Experience };
