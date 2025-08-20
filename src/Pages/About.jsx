
import React from "react";
import CountUp from "react-countup";
import TechStack from "../Components/TechStack";

import profilePic from "/images/profile-picm.png";
import linkedinIcon from "/images/in.png";
import githubIcon from "/images/git.png";
import facebookIcon from "/images/fcb.png";

function About() {
  const socialIcons = [
    { href: "https://www.linkedin.com/in/milot-verbani-4371232b1/", src: linkedinIcon },
    { href: "https://github.com/milotverbani", src: githubIcon },
    { href: "https://www.facebook.com/milot.vr.2025/", src: facebookIcon },
  ];

  return (
    <section
      id="about"
      className="mt-20 text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <div className="inline-block bg-red-600/20 px-4 py-2 rounded-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
              About Me
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Your Vision. Our Expertise.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Your Success.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I’m BSc. Milot Verbani, a passionate software developer with a
            background in Computer Science. I have successfully completed a
            Full-Stack Web Developer course and hold a Bachelor’s degree in
            Computer Science. With 2 years of hands-on experience in both
            frontend and backend development, I enjoy building modern,
            functional, and scalable web applications. Always eager to learn and
            take on new challenges, I strive to turn ideas into impactful
            digital solutions.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              { value: 10, label: "Projects", suffix: "+" },
              { value: 3, label: "Years", suffix: "+" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-red-500/30 transition-all"
              >
                <p className="text-3xl font-bold text-red-400">
                  <CountUp end={stat.value} duration={3} suffix={stat.suffix} />
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-5 mt-6">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 flex items-center justify-center w-14 h-14 rounded-full border border-gray-700/50 hover:border-red-500/30 transition-all"
              >
                <img
                  src={social.src}
                  alt="social"
                  className="rounded-full w-8 h-8 object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transform transition duration-500">
              <img
                src={profilePic}
                alt="Milot Verbani"
                className="w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <TechStack />
    </section>
  );
}

export default About;
