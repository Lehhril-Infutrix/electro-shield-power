import React from 'react';

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-[#CC0001]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12l2-2 4 4 8-8 4 4-12 12z" />
      </svg>
    ),
    title: '25+ Years of Expertise',
    description:
      'Driven by technocrats with decades of experience in electrical engineering, manufacturing, and operations.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-[#CC0001]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
      </svg>
    ),
    title: 'Global-Standard Quality',
    description:
      'Strict adherence to international quality benchmarks ensures reliable transformer components every time.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-[#CC0001]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Advanced Infrastructure',
    description:
      'Equipped with CNC cutting machines, precision tools, and robust manufacturing facilities for consistent output.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-[#CC0001]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    title: 'Comprehensive Solutions',
    description:
      'From CRGO laminations and amorphous loops to DPC conductors, transformer tanks, and radiators – all under one roof.',
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-[#fffaf7] py-20 scroll-m-16" id='features'>
      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-12 max-w-2xl mx-auto px-4 sm:px-0">
          <h2 className="text-sm font-semibold uppercase text-[#CC0001] mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Key Strengths of Electroshield Power
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Backed by decades of expertise, advanced infrastructure, and a
            commitment to quality, we deliver reliable transformer components
            that power industries with confidence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-white shadow-md
             transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // staggered animation
              data-aos-duration="1000"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default KeyFeatures;
