import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my professional experience, technical expertise,
          and contributions across leading organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 w-1 h-full bg-white/30 transform md:-translate-x-1/2"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-4 md:left-1/2 top-8 transform -translate-x-1/2 z-10">
              <div className="w-5 h-5 bg-purple-500 border-4 border-gray-900 rounded-full shadow-[0_0_15px_rgba(130,69,236,0.8)]"></div>
            </div>

            {/* Experience Card */}
            <div
              className={`w-full md:w-[46%] ml-10 md:ml-0 p-6 md:p-8 rounded-2xl border border-white/20 bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50 ${
                index % 2 === 0
                  ? "md:mr-auto md:pr-8"
                  : "md:ml-auto md:pl-8"
              }`}
            >
              {/* Company Header */}
              <div className="flex items-start gap-5">
                {/* Company Logo */}
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl overflow-hidden p-1">
                  <img
                    src={experience.img}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Role & Company */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                    {experience.role}
                  </h3>

                  <h4 className="text-md font-medium text-purple-400 mt-1">
                    {experience.company}
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-6">
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-400 text-sm md:text-base leading-relaxed"
                    >
                      <span className="text-purple-400 mr-3 mt-1.5 flex-shrink-0">
                        ●
                      </span>

                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mt-6">
                <h5 className="font-semibold text-white mb-3">Tech Stack</h5>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-500/10 text-purple-300 px-3 py-1.5 text-xs md:text-sm rounded-lg border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
