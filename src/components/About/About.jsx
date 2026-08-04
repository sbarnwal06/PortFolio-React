import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/profile2.jpeg";

const About = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    setTilt({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shital Barnwal
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={[
                "UI Engineer",
                2000,
                "UI Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
              wrapper="span"
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Senior React Developer with 5+ years of experience architecting scalable,
            high-performance web applications using React.js, TypeScript, Redux Toolkit,
            and modern frontend technologies. Experienced in building reusable component systems,
            Micro Frontend architectures, and integrating Generative AI solutions with OpenAI
            and Claude APIs. Passionate about performance optimization, clean architecture,
            and delivering intuitive user experiences through scalable and maintainable code.
          </p>

          <a
            href="/Shital_Barnwal_React_Developer_UAE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>

        </div>


        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">

          <div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full transition-transform duration-500"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `
                perspective(1000px)
                rotateX(${tilt.x}deg)
                rotateY(${tilt.y}deg)
                scale(1.05)
              `,
            }}
          >
            <img
              src={profileImage}
              alt="Shital Barnwal"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;